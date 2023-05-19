import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url = 'http://localhost:3000/users/';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  add(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }

  edit(user: User): Observable<User> {
    return this.httpClient.put<User>(this.url + user.id, user);
  }

  delete(user: User): Observable<User> {
    return this.httpClient.delete<User>(this.url + user.id);
  }
}

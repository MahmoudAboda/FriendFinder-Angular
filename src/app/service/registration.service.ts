import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post("http://localhost:8085/login", user)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8085/registeruser", user);
  }
}

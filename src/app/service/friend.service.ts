import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../common/post';
import { Friend } from '../common/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private basUrl = "http://localhost:8085/api/friends/6";

  constructor(private httpClient: HttpClient) { }
  public fetchAll(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>(this.basUrl);
  }


}

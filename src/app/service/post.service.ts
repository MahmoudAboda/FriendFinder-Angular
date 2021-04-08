import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../common/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private basUrl = "http://localhost:8085/api/";

  constructor(private httpClient: HttpClient) { }
  public fetchAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.basUrl + 'finding');
  }

  public addPosts(post: Post) {
    return this.httpClient.post<Post>(this.basUrl + 'posts/add', post);
  }

  public addPostss(post: Post) {
    return this.httpClient.post<Post>(this.basUrl + 'posts/add', post);
  }

  public findById(id: number) {
    return this.httpClient.get<Post>(this.basUrl + 'findById/' + id);
  }

  public update(id: number, post: Post) {
    return this.httpClient.put<Post>(this.basUrl + 'update/' + id, post);
  }





}

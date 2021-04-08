import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/app/common/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentService {
  private basUrl = "http://localhost:8085/api/postss";

  constructor(private httpClient: HttpClient) { }
  public fetchComments(postId: number): Observable<Comment[]> {
    const commentUrl = `${this.basUrl}/${postId}`;
    return this.httpClient.get<Comment[]>(commentUrl);
  }

  public addComments(comment: Comment) {
    return this.httpClient.post<Comment>(this.basUrl + '/comments/add', comment);
  }
}

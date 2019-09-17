import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PostsService {
  private url = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-type": "application/json" })
  };
  getAllPosts(): Observable<any> {
    return this.http.get<any>(`${this.url}/posts`, this.httpOptions);
  }

  getPost(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/posts/${id}`, this.httpOptions);
  }

  editPost(post, id): Observable<any> {
    return this.http.put<any>(`${this.url}/posts/${id}/update`, post, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      })
    });
  }
  deletePost(id): Observable<any> {
    return this.http.delete<any>(`${this.url}/posts/${id}/delete`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      })
    });
  }
}

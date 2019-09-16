import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url: string = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ "content-type": "application/json" })
  };

  login(user): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, user, this.httpOptions);
  }
}

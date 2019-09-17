import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url: string = "http://localhost:8000/api";
  constructor(private http: HttpClient, private router: Router) {}
  httpOptions = {
    headers: new HttpHeaders({ "content-type": "application/json" })
  };

  login(user): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, user, this.httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, user, this.httpOptions);
  }
  checkToken(): boolean {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string, clientType: string): Observable<any> {
    return this.http.get("http://localhost:8080/login/", {
      params: {
        "email": email,
        "password": password,
        "client-type": clientType
      },
      responseType: 'text'
    })
  }



}
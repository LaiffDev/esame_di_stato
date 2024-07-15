import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'https://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  public Login(email: string, password: string){
    const body = {
      email: email,
      password: password
    }
    return this.http.post(`${this.baseUrl}/insert`, body)
  }
}

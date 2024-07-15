import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = "http://localhost:3000"

  //get di tutti gli appuntamenti
  public GetSchedules():Observable<any>{
    return this.http.get(`${this.baseUrl}/schedules`)
  }
}

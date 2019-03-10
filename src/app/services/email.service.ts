import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/Email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  emailsUrl: string = 'http://5c5a21f9af3ff700140de477.mockapi.io/api/email';
  constructor(private http:HttpClient) { }

  getEmails():Observable<Email[]>{
    return this.http.get<Email[]>(this.emailsUrl);
  }
}

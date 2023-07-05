import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email.model';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailSendUrl:string="https://localhost:44395/api/Emails";
  DataEmail:Email=new Email();
  constructor(private http:HttpClient) { }

  sendEmail(emailData: any) {
    return this.http.post(this.emailSendUrl, emailData);
  }
}

import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/Email';
import { EmailService } from '../../services/email.service'
@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  emails: Email[];
  selectedEmail: Email;

  constructor(private emailService:EmailService) { }

  ngOnInit() {
    this.emailService.getEmails().subscribe(emails => {
       this.emails = emails;
    });
  }
  onSelectEmail(email:Email) {
    this.selectedEmail = email
   
  }

}

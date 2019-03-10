import { Component, OnInit, Input } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { EmailService } from '../../services/email.service';
@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  @Input() email:Email;
  constructor(emailService:EmailService) { }

  ngOnInit() {
  }
  // set dynamic classes
  setClasses() {
    let classes = {
      email:true,
      'is-read': this.email.read
    }

    return classes;
  }

}

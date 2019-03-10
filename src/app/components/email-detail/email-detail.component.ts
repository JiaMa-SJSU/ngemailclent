import { Component, OnInit, Input } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { EmailService } from 'src/app/services/email.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {
@Input() email:Email;
  constructor(private emailService: EmailService,private route: ActivatedRoute) { 
    this.email = new Email();
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.emailService.getEmail(id).subscribe(email => {
      this.email = email;
   });
   this.email.read = true
  
  }

}

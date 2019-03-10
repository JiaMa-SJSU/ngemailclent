import { Component, OnInit, Input } from '@angular/core';
import { Email } from 'src/app/models/Email';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {
  @Input() email:Email;
  constructor() { }

  ngOnInit() {
  }

}

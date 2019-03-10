import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { EmailsComponent } from './components/emails/emails.component';
import { AddEmailComponent } from './components/add-email/add-email.component';
import { EmailDetailComponent } from './components/email-detail/email-detail.component'
const routes: Routes = [
  { path: '',redirectTo: '/LIST', pathMatch: 'full'},
  { path: 'LIST', component:  EmailsComponent},
  { path: 'details:id', component:  EmailDetailComponent},
  { path: 'CREATE', component:  AddEmailComponent},
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule,NoopAnimationsModule,MatButtonModule,MatCheckboxModule,CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

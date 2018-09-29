import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LookupService } from './services/lookup.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { PhoneFormatPipe } from './pipes/phone.pipe';
import { HoverDirective } from './directives/hover.directive';
import { KeyInDirective } from './directives/keyin.directive';
import { DatePickerDirective } from './directives/datepicker.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    PhoneFormatPipe,
  HoverDirective,
  KeyInDirective,
  DatePickerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([{
      path: '', component: LoginComponent
      },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'profiles', component: UsersComponent
    }])
  ],
  providers: [LookupService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

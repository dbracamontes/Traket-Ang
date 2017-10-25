import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login-service/login.service';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [LoginService]
})
export class LoginModule { }

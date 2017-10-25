import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { User } from 'app/model/user';
import { LoginService } from 'app/components/login-module/login-service/login.service';



@Component({
  selector: 'base-web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  //email: string;
  //password: string;

  public usuario: User;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.usuario = new User();
  }

  onSubmit(formValue: any) {
    console.log(formValue);
    // this.loginService.validateUser(this.userName,this.password);
  }

}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  private url: string = "/BaseApp-web/resources/auth/get";

  constructor(private http: Http) {

  }

  public validateUser(user: string, password: string) {
    // let headers = new Headers();
    // headers.set("Content-Type", "application/json");

   //  this.http.post(this.url, { name: user, pass: password }, { headers: headers })
     // .subscribe(res => alert(res.json()));

    // this.http.get(this.url, { headers: headers })
     // .subscribe(res => alert(res.json()));

  }


}

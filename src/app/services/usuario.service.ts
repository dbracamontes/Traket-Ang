import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from 'app/model/user';
import 'rxjs/Rx';


@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  public getUsuario() {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');


    return this.http.get('/Traket-web/resources/empresa', { headers: headers })
      .map(
      (response: Response) => {
        const data = response.json();
        // console.log(data);
        return data;
      }
      );
  }

  /*
  public addUsuario(usuario: any) {
    console.log('creando ');
    console.log(usuario);

    return this.http.post('/Traket-web/resources/usuario', usuario)
      .map(
      (response: Response) => {
        const data = response.json();
        // console.log(data);
        return data;
      }
      );
  }*/

  public addUsuario(usuario: any) {
    //console.log('creando ');
    console.log(usuario);

    this.http.post('/Traket-web/resources/usuario', usuario)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    }


}

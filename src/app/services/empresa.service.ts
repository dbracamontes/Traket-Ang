import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
import { Empresa } from 'app/model/empresa';
import { User } from 'app/model/user';
import 'rxjs/Rx';

@Injectable()
export class EmpresaService {

  constructor(private http: Http) { }

  public getEmpresas() {
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

  public addEmpresa(empresa: any) {
    return this.http.post('/Traket-web/resources/empresa', empresa)
      .map(
      (response: Response) => {
        const data = response.json();
        // console.log(data);
        return data;
      }
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}

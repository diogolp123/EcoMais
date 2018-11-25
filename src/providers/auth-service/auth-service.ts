import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { JsonAccessToken } from '../../models/jsonAcessToken';
import { JsonReturn } from '../../models/jsonReturn';
import { Credenciais } from '../../models/login';
import { AccessToken } from '../../models/token';
import { API_ENDPOINT } from './../../utils/constants';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {    
    console.log('Hello AuthServiceProvider Provider');
  }

  authorize(credentials: Credenciais): Observable<JsonAccessToken>{
    var headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

    let options = { headers: headers };

    let parametros = "username="+credentials.username+"&password="+credentials.password+"&grant_type="+credentials.grant_type;

      return this.http.post<JsonAccessToken>(API_ENDPOINT+"users/auth/sign_in", parametros, options);
  }

  autentication(credentials: Credenciais, access_token: AccessToken): Observable<JsonReturn>{
    var headers = new HttpHeaders();

    headers = headers.set('Authorization', 'bearer ' + access_token.access_token);

    let options = { headers: headers };
    
    let url = API_ENDPOINT+"api/usuario/" + access_token.uid;

      return this.http.get<JsonReturn>(url, options);
  }

}

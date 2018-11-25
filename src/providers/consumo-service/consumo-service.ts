import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CadastroConsumo } from '../../models/cadastroConsumo';
import { JsonReturn } from '../../models/jsonReturn';
import { AccessToken } from '../../models/token';
import { Usuario } from '../../models/usuario';
import { API_ENDPOINT } from '../../utils/constants';
import { SessionProvider } from '../session/session';

/*
  Generated class for the ConsumoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsumoServiceProvider {

  token: AccessToken;
  usuarioLogado: Usuario;

  constructor(public http: HttpClient, public session: SessionProvider) {

    this.session.get()
    .then(res => {
      this.usuarioLogado = Object.assign(new Usuario, res);
    });

    this.session.getToken()
    .then(res => {
      this.token = Object.assign(new AccessToken, res);
    });
  }
  
  getUsuarios() : Observable<Usuario>{
    return this.http.get<Usuario>(API_ENDPOINT+"api/all");
  }

  CadastrarConsumo(dadosCadastroConsumo: CadastroConsumo) : Observable<JsonReturn>{
    this.session.getToken()
      .then(res => {
        this.token = Object.assign(new AccessToken, res);
      });
    
    let cadastroConsumo: CadastroConsumo = {
      id_usuario: this.usuarioLogado.id,
      leitura: dadosCadastroConsumo.leitura,
      ano_mes: dadosCadastroConsumo.ano_mes
    }
    var headers = new HttpHeaders();

    headers = headers.set('Authorization', 'bearer ' + this.token.access_token);

    let options = { headers: headers };

    
    return this.http.post<JsonReturn>(API_ENDPOINT+"api/consumo", cadastroConsumo, options);
  }

}

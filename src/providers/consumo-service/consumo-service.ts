import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { API_ENDPOINT } from '../../utils/constants';
import { JsonReturn } from '../../models/jsonReturn';
import { DateTime } from 'ionic-angular';

/*
  Generated class for the ConsumoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsumoServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConsumoServiceProvider Provider');
  }
  
  getUsuarios() : Observable<Usuario>{
    return this.http.get<Usuario>(API_ENDPOINT+"/all");
  }

  CadastrarConsumo(id: Number, consumo: Number, mes: String) : Observable<JsonReturn>{
    const cadastroConsumo: Object = {
      id: id,
      consumo: consumo,
      mes: mes
    };
    return this.http.post<JsonReturn>(API_ENDPOINT+"/consumo", cadastroConsumo);
  }

}

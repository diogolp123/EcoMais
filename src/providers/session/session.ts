import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AccessToken } from '../../models/token';
import { Usuario } from '../../models/usuario';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  constructor(public storage: Storage){

  }
  // setando uma seção e passando o tipo de usuário
  create(usuario: Usuario) {
      this.storage.set('usuario', usuario);
  }

  token(access_token: AccessToken) {
    this.storage.set('access_token', access_token);
  }

  get(): Promise<any> {
      return this.storage.get('usuario');
  }

  getToken(): Promise<any> {
    return this.storage.get('access_token');
}

  // Quando deslogar deve remova do storage
  remove() {
      this.storage.remove('usuario');
  }

  exist() {
      this.get().then(res => {
         //console.log('resultado >>> ', res);
          if(res) {
              console.log('resultado IF');
              return true;
          } else {
              //console.log('resultado else');
              return false;
          }
      });
  }

}

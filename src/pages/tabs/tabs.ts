import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CadastroConsumoPage } from '../cadastro-consumo/cadastro-consumo';
import { ConfigPage } from '../config/config';
import { HomePage } from './../home/home';
import { Usuario } from '../../models/usuario';
import { SessionProvider } from '../../providers/session/session';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  usuarioLogado: Usuario;

  tipo: String = "Gestor"

  ngOnInit() {
    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
        this.tipo = this.usuarioLogado.tipo;
      });
  }

  tab1Root = HomePage;
  tab2Root = CadastroConsumoPage;
  tab3Root = ConfigPage;

  constructor(public navCtrl: NavController, public session: SessionProvider) {
    
  }
}

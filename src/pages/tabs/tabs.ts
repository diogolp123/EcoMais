import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CadastroConsumoPage } from '../cadastro-consumo/cadastro-consumo';
import { ConfigPage } from '../config/config';
import { HomePage } from './../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CadastroConsumoPage;
  tab3Root = ConfigPage;

  constructor(public navCtrl: NavController) {
    
  }
}

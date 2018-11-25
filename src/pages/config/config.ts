import { SessionProvider } from './../../providers/session/session';
import { LoginPage } from './../login/login';
import { CadastroPage } from './../cadastro/cadastro';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  usuarioLogado: Usuario;

  tipo: String = "Gestor"

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public session: SessionProvider
  ) {  }

  ngOnInit() {
    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  onClickNovaConta(){
    this.navCtrl.push(CadastroPage, { "isEdit":false});
  }

  onClickLogout(){
    this.session.remove();
    this.navCtrl.push(LoginPage);
  }
  
}

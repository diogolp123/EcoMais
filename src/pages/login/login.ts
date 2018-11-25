import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { JsonAccessToken } from '../../models/jsonAcessToken';
import { AccessToken } from '../../models/token';
import { Usuario } from '../../models/usuario';
import { SessionProvider } from '../../providers/session/session';
import { Credenciais } from './../../models/login';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { CadastroPage } from './../cadastro/cadastro';
import { TabsPage } from './../tabs/tabs';
import { JsonReturn } from '../../models/jsonReturn';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  public propUsername: string;
  public propPassword: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public authServiceProvider: AuthServiceProvider,
    public alertCtrl: AlertController,
    public session: SessionProvider,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    //On init
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control("", [Validators.required]),
      password: this.formBuilder.control("", [Validators.required]),
      grant_type: "password"
    });
  }

  onClickEntrar(){
    //Chama o provider que autentica o usuário
    let c = Object.assign(new Credenciais, this.loginForm.value);
    //let c = JSON.stringify(this.loginForm.value);
    console.log(c);

    let loading = this.loadingCtrl.create({
      content: 'Entrando...'
    });
    loading.present();

      this.authServiceProvider.authorize(c).subscribe((response: JsonAccessToken) => {
          let token = Object.assign(new AccessToken, response);
          this.session.token(token);
          this.authServiceProvider.autentication(c, token).subscribe((response: JsonReturn) => {
              this.session.create(response.data);
              loading.dismiss();
              let alert = this.alertCtrl.create({
                title: 'Bem Vindo.',
                subTitle: response.data.nome,
                buttons: ['OK']
              }); 
              alert.present();
              this.navCtrl.setRoot(TabsPage);
              this.navCtrl.push(TabsPage);
          });
      },
      err => {
        let alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: "Usuário ou Senha Incorretos.",
          buttons: ['OK']
        });
        loading.dismiss();
        alert.present();
      }
    );
  };

}

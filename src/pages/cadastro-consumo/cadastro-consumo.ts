import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { SessionProvider } from '../../providers/session/session';

/**
 * Generated class for the CadastroConsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-consumo',
  templateUrl: 'cadastro-consumo.html',
})

export class CadastroConsumoPage {

  titulo : string;
  btnTexto : string;
  cadastroConsumoForm : FormGroup;
  usuarioLogado: Usuario;
  myDate: String;

  constructor(
    public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    public navParams: NavParams, 
    public session: SessionProvider,
    public loadingCtrl : LoadingController,
    public alertCtrl: AlertController
    ) {
      this.myDate = "2018-06";
    }

    
  refresh(){
  }
<<<<<<< HEAD

    ngOnInit() {
      this.session.get()
        .then(res => {
          this.usuarioLogado = Object.assign(new Usuario, res);
        });
    }

    ionViewWillLeave(){
    }
=======
  ngOnInit() {
    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
      });
  }
>>>>>>> 1f7fb361e69fa7d0c481cce777d95b12d2e600b2

  ionViewDidLoad() {
    this.titulo = "Cadastro de Consumo";
    this.btnTexto = "Cadastrar";
    this.cadastroConsumoForm = this.formBuilder.group({
      nome: this.formBuilder.control("", [Validators.required]),
      leitura: this.formBuilder.control("", [Validators.required]),
      myDate: this.formBuilder.control("", [Validators.required])
    });
  }

  
}

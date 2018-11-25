import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { CadastroConsumo } from '../../models/cadastroConsumo';
import { JsonReturn } from '../../models/jsonReturn';
import { Usuario } from '../../models/usuario';
import { SessionProvider } from '../../providers/session/session';
import { ConsumoServiceProvider } from '../../providers/consumo-service/consumo-service';
import { AccessToken } from '../../models/token';

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
  token: AccessToken;
  ano_mes: String;

  tipo: String = "Gestor"

  constructor(
    public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    public navParams: NavParams, 
    public session: SessionProvider,
    public loadingCtrl : LoadingController,
    public alertCtrl: AlertController,
    public consumoServiceProvider: ConsumoServiceProvider
    ) {
      this.ano_mes = "2018-06";
    }

  refresh(){
  }

  ngOnInit() {
    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
        this.cadastroConsumoForm.controls['nome'].setValue(this.usuarioLogado.nome);
      });

      this.session.getToken()
      .then(res => {
        this.token = Object.assign(new AccessToken, res);
      });
  }

  ionViewDidLoad() {
    this.titulo = "Cadastro de Consumo";
    this.btnTexto = "Cadastrar";
    this.cadastroConsumoForm = this.formBuilder.group({
      nome: this.formBuilder.control("", [Validators.required]),
      leitura: this.formBuilder.control("", [Validators.required]),
      ano_mes: this.formBuilder.control("", [Validators.required])
    });
  }

  onClickCadastrar() {

    let c = Object.assign(new CadastroConsumo, this.cadastroConsumoForm.value);

    let loading = this.loadingCtrl.create({
      content: "Aguarde..."
    });

    loading.present();

    this.consumoServiceProvider.CadastrarConsumo(c).subscribe((response: JsonReturn) => {
      loading.dismiss
    });
  }
}

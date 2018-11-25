import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroConsumoPage } from './cadastro-consumo';

@NgModule({
  declarations: [
    CadastroConsumoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroConsumoPage),
  ],
})
export class CadastroConsumoPageModule {}

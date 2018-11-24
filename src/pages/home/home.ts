import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { IonicPage, NavController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { SessionProvider } from './../../providers/session/session';




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('barContas') barContas;

  barChart: any;
  lineChart: any;
  pieChart: any;
  barContasChart: any;
  maioresConsumidores: any;
  consumoAnual: any;
  consumoMensal:any;
  usuarioLogado : Usuario;
  myDate: String;
  myYear: String;


  //qty: any;

  constructor(
      public navCtrl: NavController,
      public session: SessionProvider,

    ) {
        this.myDate = "2018-06";
        this.myYear = "2018";
  }

  refresh(){ 
    this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            datasets: [{
                label: 'Consumo Mensal',
                fill: false,
                data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], // DADOS RECEBIDOS DO SERVIDOR DOUBLE KW/H MENSAIS
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        },
        responsive: true

    });
}

  ionViewDidEnter(){
    this.refresh();
}
  ionViewDidLoad() {

    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
        this.refresh();
    }); 
  }
}
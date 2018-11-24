import { Injectable, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { errorHandler } from '@angular/platform-browser/src/browser';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

//import { SaveDataProvider } from './../save-data/save-data';

@Injectable()
export class CallChatProvider {

  private headers: Headers;
  private options: RequestOptions;

  private workspaceId: "94b7fdf3-d5a0-4bdd-b45d-2b67d6d4ef20";
  private target: "generic";

  constructor(public http: Http,
              /*private saveDataProvider: SaveDataProvider,*/
              private alertCtrl: AlertController) {

    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  setChatbot(inputParam): Observable<any> {
    console.log(inputParam);
        console.log("=== Conversation Generico ===");
        let html = `https://gateway.watsonplatform.net/conversation/api/v1/workspaces/94b7fdf3-d5a0-4bdd-b45d-2b67d6d4ef20/message?version=2017-05-26`
        this.headers.delete('Authorization');
        this.headers.append('Authorization', `Basic ${btoa("09bffc5e-3b00-4559-9950-3841ca217fbb" + ':' + "WMLZQBs1jHRz")}`);
        return this.http
          .post(html, inputParam, this.options)
          .map(this.extractData).catch(this.handleError);
  }

  presentAlert(errorMsg: string) {
    let alert = this.alertCtrl.create({
      title: 'Algo não está certo',
      subTitle: errorMsg,
      buttons: [{
        text: 'Ok',
        role: 'Ok'
      }]
    });
    alert.present();
  }

  private extractData(res: Response) {
    let body = res.json();

    return body || {};
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error);
  }

}

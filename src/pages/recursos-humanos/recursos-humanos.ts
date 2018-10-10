import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePessoaPage } from '../detalhe-pessoa/detalhe-pessoa';

/**
 * Generated class for the RecursosHumanosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recursos-humanos',
  templateUrl: 'recursos-humanos.html',
})
export class RecursosHumanosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecursosHumanosPage');
  }

  irDetalhe(){
    this.navCtrl.push(DetalhePessoaPage);
  }

}

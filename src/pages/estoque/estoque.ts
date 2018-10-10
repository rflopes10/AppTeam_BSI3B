import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the EstoquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estoque',
  templateUrl: 'estoque.html',
})
export class EstoquePage {

  testCheckboxOpen: boolean;
  testCheckboxResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstoquePage');
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Filtrar por:');

    alert.addInput({
      type: 'checkbox',
      label: 'Disponível',
      value: 'value1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Indisponível',
      value: 'value2'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Filtrar',
      handler: data => {
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

}

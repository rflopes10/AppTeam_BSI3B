import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  testCheckboxOpen: boolean;
  testCheckboxResult;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }
  
  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Filtrar por:');

    alert.addInput({
      type: 'checkbox',
      label: 'Moutain Bike',
      value: 'value1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Urbana',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Fixa',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Speed',
      value: 'value4'
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

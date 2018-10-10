import { Component, Output } from '@angular/core';
import { NavController, NavParams, LoadingController, ItemSliding } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { FabContainer, MenuController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  toggled: boolean;
  searchTerm: String = '';
  items: string[];
  data = [];
  constructor(

    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
  ) {

    this.toggled = false;
    this.menuCtrl.enable(false);

  }

  login() {

    var usuario = this.data['username'];
    var senha = this.data['password'];

    this.logar(usuario, senha);
  }

  logar(usuario, senha) {

    if (usuario = this.data['username'] == "admin", senha = this.data['password'] == "admin") {
      this.navCtrl.setRoot(HomePage);
      console.log("Deu boa")
    } else {
      let toast = this.toastCtrl.create({
        message: 'Usuario e/ou senha incorreta.',
        duration: 3000,
        position: 'bottom',
        cssClass: "cssToast",
      });

      toast.present();

    }
  }

  entrar() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
  }

  toggleSearch() {
    this.toggled = this.toggled ? false : true;
  }

}

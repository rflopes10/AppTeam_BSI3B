import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ItemSliding, MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';
import { InventarioPage } from '../inventario/inventario';
import { RecursosHumanosPage } from '../recursos-humanos/recursos-humanos';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  showSearchbar: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController

  ) {

    this.menuCtrl.enable(true);

  }

  ionViewDidLoad() {
    console.log('Pagina obras carregada.');
  }

  openFilters() {
    console.log('crap');
  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
  }

  irProduto(){
    this.navCtrl.setRoot(ProdutoPage);
  }

  irInventario(){
    this.navCtrl.setRoot(InventarioPage);
  }

  irRecursosHumanos(){
    this.navCtrl.setRoot(RecursosHumanosPage);
  }

}


import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ToastController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConfigProvider } from '../providers/config/config';
import { HomePage } from '../pages/home/home';
import { ProdutoPage } from '../pages/produto/produto';
import { LoginPage } from '../pages/login/login';
import { SobrePage } from '../pages/sobre/sobre';
import { IntroPage } from '../pages/intro/intro';
import { InventarioPage } from '../pages/inventario/inventario';
import { RecursosHumanosPage } from '../pages/recursos-humanos/recursos-humanos';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage: any;
  @ViewChild('NAV') nav: Nav;
  public pages: Array<{ titulo: string, component: any, icon: string }>;
  showedAlert: boolean;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    toastCtrl: ToastController,
    configProvider: ConfigProvider,
  ) {

    var lastTimeBackPress = 0;
    var timePeriodToExit = 2000;

    this.pages = [
      { titulo: 'Inicio', component: HomePage, icon: 'home' },
      { titulo: 'Produto', component: ProdutoPage, icon: 'cart' },
      { titulo: 'Inventário', component: InventarioPage, icon: 'archive' },
      { titulo: 'Recursos Humanos', component: RecursosHumanosPage, icon: 'person' }, 
      { titulo: 'Sobre', component: SobrePage, icon: 'information-circle' },
    ];


    platform.ready().then(() => {

      let config = configProvider.getConfigData();
      if (config == null) {
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
      } else {
        this.rootPage = LoginPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();

    });

  }

  goToPage(page) {
    this.nav.setRoot(page);
  }

  logout() {

    this.goToPage(LoginPage);
  }


}

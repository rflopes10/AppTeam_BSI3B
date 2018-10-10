import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfigProvider } from '../providers/config/config';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';
import { ProdutoPage } from '../pages/produto/produto';
import { InventarioPage } from '../pages/inventario/inventario';
import { EstoquePage } from '../pages/estoque/estoque';
import { RecursosHumanosPage } from '../pages/recursos-humanos/recursos-humanos';
import { DetalhePessoaPage } from '../pages/detalhe-pessoa/detalhe-pessoa';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    LoginPage,
    IntroPage,
    ProdutoPage,
    InventarioPage,
    EstoquePage,
    RecursosHumanosPage,
    DetalhePessoaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    LoginPage,
    IntroPage,
    ProdutoPage,
    InventarioPage,
    EstoquePage,
    RecursosHumanosPage,
    DetalhePessoaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DiveCardPage } from '../pages/dive-card/dive-card';
import { MenuPage } from '../pages/menu/menu';
import { NewsPage } from '../pages/news/news';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { RegistryPage } from '../pages/registry/registry';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DiveCardPage,
    MenuPage,
    NewsPage,
    TabsControllerPage,
    RegistryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiveCardPage,
    MenuPage,
    NewsPage,
    TabsControllerPage,
    RegistryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
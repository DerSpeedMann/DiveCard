import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DiveCardPage } from '../pages/dive-card/dive-card';
import { NewsPage } from '../pages/news/news';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { DiveCard2Page } from '../pages/dive-card2/dive-card2';
import { MenPage } from '../pages/men/men';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DiveCardPage,
    NewsPage,
    TabsControllerPage,
    DiveCard2Page,
    MenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiveCardPage,
    NewsPage,
    TabsControllerPage,
    DiveCard2Page,
    MenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
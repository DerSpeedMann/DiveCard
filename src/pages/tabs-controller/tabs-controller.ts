import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiveCardPage } from '../dive-card/dive-card';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DiveCardPage;
  tab2Root: any = NewsPage;
  constructor(public navCtrl: NavController) {
  }
  
}

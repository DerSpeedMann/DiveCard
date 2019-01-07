import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiveCardPage } from '../dive-card/dive-card';
import { DiveCardPage } from '../dive-card/dive-card';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = DiveCardPage;
  tab2Root: any = NewsPage;
  constructor(public navCtrl: NavController) {
  }
  goToDiveCard(params){
    if (!params) params = {};
    this.navCtrl.push(DiveCardPage);
  }
}

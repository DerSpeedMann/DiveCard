import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
}

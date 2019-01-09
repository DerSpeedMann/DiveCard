import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiveCardPage } from '../dive-card/dive-card';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html'
})
export class RegistryPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToDiveCard(params){
    if (!params) params = {};
    this.navCtrl.push(DiveCardPage);
  }
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
}

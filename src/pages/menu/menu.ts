import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistryPage } from '../registry/registry';
import { DiveCardPage } from '../dive-card/dive-card';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToRegistry(params){
    if (!params) params = {};
    this.navCtrl.push(RegistryPage);
  }
}

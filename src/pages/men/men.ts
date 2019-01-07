import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiveCard2Page } from '../dive-card2/dive-card2';
import { DiveCardPage } from '../dive-card/dive-card';

@Component({
  selector: 'page-men',
  templateUrl: 'men.html'
})
export class MenPage {

  constructor(public navCtrl: NavController) {
  }
  goToDiveCard2(params){
    if (!params) params = {};
    this.navCtrl.push(DiveCard2Page);
  }goToDiveCard(params){
    if (!params) params = {};
    this.navCtrl.push(DiveCardPage);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiveCardPage } from '../dive-card/dive-card';

@Component({
  selector: 'page-dive-card2',
  templateUrl: 'dive-card2.html'
})
export class DiveCard2Page {

  constructor(public navCtrl: NavController) {
  }
  goToDiveCard(params){
    if (!params) params = {};
    this.navCtrl.push(DiveCardPage);
  }
}

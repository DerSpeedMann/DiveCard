import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-dive-card',
  templateUrl: 'dive-card.html'
})
export class DiveCardPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public events: Events) {
  }
  ionViewWillEnter(){
    if(localStorage.getItem("firstname") && localStorage.getItem("lastname") && localStorage.getItem("date")){
      document.getElementById('li_person').innerHTML = localStorage.getItem("firstname")+' '+localStorage.getItem("lastname")
      document.getElementById('li_date').innerHTML = 'Kaufdatum: '+localStorage.getItem("date")

    }else{
      localStorage.clear()
      this.events.publish('update:registration')
    }
  }
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
}

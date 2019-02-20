import { Component } from '@angular/core';
import { NavController, Tab, Tabs } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  constructor(public navCtrl: NavController, public events: Events) {   
  }

  // Hide Tabs when entering the menu
  ionViewWillEnter(){
    let tabs = document.querySelectorAll(".tabbar")

    if (tabs != null) {
      Object.keys(tabs).map((key) => {
          tabs[key].style.display = 'none'
      });
    }
  }

  // Make Tabs visible again after leaving the menu
  ionViewWillLeave() {
    let tabs = document.querySelectorAll(".tabbar")

    if (tabs != null) {
      Object.keys(tabs).map((key) => {
          tabs[key].style.display = 'flex'
      });
    }
  }

  newRegistration(){
    // remove old Data
    localStorage.clear()

    // Notivy tab Controller
    this.events.publish('update:registration')

    // Navigate to Registry
    this.navCtrl.parent.select(0)
    this.navCtrl.popToRoot()
  }
}


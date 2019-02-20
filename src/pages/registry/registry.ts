import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Events } from 'ionic-angular';
import { ElementRef } from '@angular/core';
import { elementAttribute } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html'
})
export class RegistryPage {
  firstname: string
  lastname: string
  code: string
  date: string

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public events: Events, public element: ElementRef) {
  }

  register(){
    // save Data
    localStorage.setItem("firstname", this.firstname)
    localStorage.setItem("lastname", this.lastname)
    localStorage.setItem("code", this.code)
    localStorage.setItem("date", this.date)

    // Notivy tab Controller
    this.events.publish('update:registration')

    // Navigate to Card / Profile
    this.navCtrl.parent.select(0)
    this.navCtrl.popToRoot()
  }

  goToMenu(){
    this.navCtrl.push(MenuPage);
  }
}

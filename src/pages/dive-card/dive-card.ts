import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Events } from 'ionic-angular';
import { RegistryController } from '../../controller/registryController';

@Component({
  selector: 'page-dive-card',
  templateUrl: 'dive-card.html'
})
export class DiveCardPage {
  person: string = "Max Mustermann"
  date: string = "2019-01-01"
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public events: Events) {
  }
  ionViewWillEnter(){
    if(RegistryController.isRegistered()){
      let user = RegistryController.getUser()

      this.person = user.firstname+' '+user.lastname
      this.date = user.date
    }else{
      this.events.publish('update:registration')
    }
  }
  
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
}

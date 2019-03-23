import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Events } from 'ionic-angular';
import { RegistryController } from '../../controller/registryController';

@Component({
  selector: 'page-dive-card',
  templateUrl: 'dive-card.html',
})
export class DiveCardPage {
  person = "Max Mustermann"
  date = "2019-01-01"
  offlineDate = "1337-02-30"
  cardValidity = 1 // 0 = Invalid 1 = Offline 2 = Valid

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public events: Events) {
  }
  ionViewWillEnter(){
    if(RegistryController.isRegistered()){
      let user = RegistryController.getUser()

      this.person = user.firstname+' '+user.lastname
      this.date = user.date
      this.offlineDate = user.offlineUsable
    }else{
      this.events.publish('update:registration')
    }
  }
  
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
}

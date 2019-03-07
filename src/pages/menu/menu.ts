import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { RegistryController } from '../../controller/registryController';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public events: Events) {   
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

  async newRegistrationAlert() {
    const alert = await this.alertCtrl.create({
      title: 'Alte Karte wird Gelöscht!',
      message: 'Sind sie sicher das sie eine neue Karte registrieren möchten? Ihre alte Karte wird dadurch gelöscht',
      buttons: [
        {
          text: 'Okay',
          handler: () => this.newRegistration()
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });

    await alert.present();
  }
  newRegistration(){
    RegistryController.deleteUser()

    // Notivy tab Controller
    this.events.publish('update:registration')

    // Navigate to Registry
    this.navCtrl.parent.select(0)
    this.navCtrl.popToRoot()
  }
}


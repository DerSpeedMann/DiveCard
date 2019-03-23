import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistryController } from '../../controller/registryController';
import { User } from '../../data/user';

@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html'
})
export class RegistryPage {
  firstname: string
  lastname: string
  code: string
  date: string
  registryForm: FormGroup

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,
               public events: Events,  
               private alertCtrl: AlertController,
               private formBuilder: FormBuilder) {
    
    this.registryForm = RegistryController.getValidationProperties(formBuilder)
  }


  private register(){
    // check input Data
    let alert = this.alertCtrl.create()
    if(RegistryController.checkInput(this.registryForm, alert)){
      let date = new Date(); // today's date
      date.setDate(date.getDate() + 7);

      let next_date = new Date(date).toISOString().split('T')[0]; // formatting the new date in form 'YYYY-mm-dd'

      let user = new User(this.firstname,this.lastname,this.code,this.date,next_date)
      RegistryController.register(user)

      // Notivy tab Controller
      this.events.publish('update:registration')

      // Navigate to Card / Profile
      this.navCtrl.parent.select(0)
      this.navCtrl.popToRoot()
    }
  }

  goToMenu(){
    this.navCtrl.push(MenuPage);
  }
}

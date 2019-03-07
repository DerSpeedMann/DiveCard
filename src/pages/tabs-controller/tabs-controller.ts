import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { DiveCardPage } from '../dive-card/dive-card';
import { NewsPage } from '../news/news';
import { RegistryPage } from '../registry/registry';
import { Events } from 'ionic-angular';
import { RegistryController } from '../../controller/registryController';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RegistryPage;
  tab2Root: any = NewsPage;

  constructor(public navCtrl: NavController, public events: Events) {

    // check if registered
    if(RegistryController.isRegistered()){
      this.tab1Root = DiveCardPage;
    }
    
    events.subscribe('update:registration', () => {
        this.isRegistered()
    });
  }

  isRegistered(){
    if(RegistryController.isRegistered()){
      this.tab1Root = DiveCardPage      
    }else{
      this.tab1Root = RegistryPage
    }
    this.navCtrl.setRoot(TabsControllerPage);

  }
 
}

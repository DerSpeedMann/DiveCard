import { FormGroup, FormBuilder, Validators, ControlContainer } from "@angular/forms";
import { Alert } from "ionic-angular";
import { User } from "../data/user";

export class RegistryController {
  constructor() {}

  public static getValidationProperties(formBuilder: FormBuilder): FormGroup{
    return formBuilder.group({
      f_firstname: ['',Validators.compose([Validators.maxLength(30),
                       Validators.pattern('[a-zA-Z ]*'),
                       Validators.required])],
      f_lastname: ['', Validators.compose([Validators.maxLength(30), 
                       Validators.pattern('[a-zA-Z ]*'), 
                       Validators.required])],
      f_code: ['', Validators.compose([Validators.minLength(2),
                   Validators.maxLength(2), 
                   Validators.pattern('[a-zA-Z0-9]*'), 
                   Validators.required])],
      f_date: ['',Validators.required]
    });
  }

  // Check form for invalid / missing input
  // presents alert and return false on failure
  public static checkInput(registryForm: FormGroup, alert: Alert ) : boolean {
    var setTitle:string
    var setSubTitle:string

    if(registryForm.invalid){
      if(registryForm.controls.f_date.invalid){
        setTitle = "Kaufdatum nicht angegeben!"
        setSubTitle = "Bitte füllen sie alle Felder aus."
      }
      if(registryForm.controls.f_code.invalid){
        setTitle = "Activierungscode ungültig!"
        setSubTitle = "Bitte überprüfen sie die Codelänge."
      }
      if(registryForm.controls.f_lastname.invalid){
        setTitle = "Nachname nicht angegeben!"
        setSubTitle = "Bitte füllen sie alle Felder aus."
      }
      if(registryForm.controls.f_firstname.invalid){
        setTitle = "Vorname nicht angegeben!"
        setSubTitle = "Bitte füllen sie alle Felder aus."
      }
  
      alert.setTitle(setTitle);
      alert.setSubTitle(setSubTitle);
      alert.addButton('OK');
      alert.present();

      return false;
    }
  return true;
  }

  // save Data
  public static register(user: User){
   
    localStorage.setItem("user", JSON.stringify(user))
  }

  // Check registration
  public static isRegistered() : boolean{
    if(localStorage.getItem("user")){
      return true
    }
    return false;
  }
  public static getUser(): User{
    return JSON.parse(localStorage.getItem("user")) 
  }
  public static deleteUser(){
    localStorage.removeItem("user")
  }
}


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginSpeakerPage } from '../speaker/login-speaker/login-speaker';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  goToSpeaker() {
    this.navCtrl.push(LoginSpeakerPage);
  }

  goToAudience() {

  }

}

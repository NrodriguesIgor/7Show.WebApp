import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Navbar, ViewController, ToastController } from 'ionic-angular';
import { HomeSpeakerPage } from '../home-speaker/home-speaker';

@IonicPage()
@Component({
    selector: 'page-login-speaker',
    templateUrl: 'login-speaker.html'
})
export class LoginSpeakerPage {
    email: string;
    password: string;

    constructor(
        public navCtrl: NavController,
        private viewCtrl: ViewController,
        private toastCtrl : ToastController
    ) {
 
    }

    ionViewDidLoad() {
        this.viewCtrl.setBackButtonText('');
    }

    back() {
        this.navCtrl.pop();
    }

    connect() {
       // if (this.email === "admin" && this.password === "admin") {
           this.navCtrl.push(HomeSpeakerPage);
       // } else {
      //      this.message('Usuario invalido')
      //  }  
    }

    message(error) {
        let toast = this.toastCtrl.create({
            message: error,
            duration: 5000,
            position: 'top',
            cssClass: 'toast-error',
            showCloseButton: true,
            closeButtonText: 'X',
            dismissOnPageChange: false
          });
      
          toast.present();
    }

}

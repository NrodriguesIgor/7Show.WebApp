import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Navbar, ViewController, ToastController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    constructor(
        public navCtrl: NavController,
        private params : NavParams,
        private viewCtrl: ViewController     
    ) {
      
    }

    ionViewDidLoad() {
        this.viewCtrl.setBackButtonText('');
    }

    back() {
        this.navCtrl.pop();
    }



}

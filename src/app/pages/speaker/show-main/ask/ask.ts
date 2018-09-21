import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-ask',
    templateUrl: 'ask.html'
})
export class AskPage {

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

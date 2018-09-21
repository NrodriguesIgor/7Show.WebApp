import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-question',
    templateUrl: 'question.html'
})
export class QuestionPage {

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

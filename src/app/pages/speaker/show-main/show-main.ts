import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Navbar, ViewController, ToastController, NavParams } from 'ionic-angular';
import { AboutPage } from './about/about';
import { StreamPage } from './stream/stream';
import { QuestionPage } from './question/question';
import { AskPage } from './ask/ask';

@IonicPage()
@Component({
    selector: 'page-show-main',
    templateUrl: 'show-main.html'
})
export class ShowMainPage {
    show: any;  
    timer: any;

    constructor(
        public navCtrl: NavController,
        private params : NavParams, 
        private viewCtrl: ViewController     
    ) {
        this.show = this.params.get('show');
    }

    ionViewDidLoad() {
        this.viewCtrl.setBackButtonText('');
    }

    back() {
        this.navCtrl.pop();
    }

    goToStream() {
        this.navCtrl.push(StreamPage);
    }

    goToQuestion() {
        this.navCtrl.push(QuestionPage);
    }

    goToAsk() {
        this.navCtrl.push(AskPage);
    }

    goToAbout() {
       this.navCtrl.push(AboutPage);
    }


}

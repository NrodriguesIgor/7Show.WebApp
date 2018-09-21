import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Navbar, ViewController, ToastController } from 'ionic-angular';
import { ShowMainPage } from '../show-main/show-main';

@IonicPage()
@Component({
    selector: 'page-home-speaker',
    templateUrl: 'home-speaker.html'
})
export class HomeSpeakerPage {
    showList: any[] = []

    constructor(
        public navCtrl: NavController,
        private viewCtrl: ViewController     
    ) {
        this.showList.push({id:1, name: 'Palestra Samuel'});
        this.showList.push({id:2, name: 'Palestra Igor'});
        this.showList.push({id:3, name: 'Palestra Paulo'});
        this.showList.push({id:4, name: 'Palestra Elton'});
        this.showList.push({id:5, name: 'Palestra Heinhard'});
    }

    ionViewDidLoad() {
        this.viewCtrl.setBackButtonText('');
    }

    back() {
        this.navCtrl.pop();
    }

    creteShow() {

    }

    openShow(show) {
        this.navCtrl.push(ShowMainPage, {show: show});
    }

}

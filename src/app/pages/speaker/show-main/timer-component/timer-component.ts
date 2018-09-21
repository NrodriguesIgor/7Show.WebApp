import { Component,  } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'timer-component',
    templateUrl: 'timer-component.html'
})
export class TimerComponent {
    seconds = 0;
    minutes = 0;

    constructor(
        public navCtrl: NavController,
    
    ) {
        setInterval(() => {
           this.updateTime();
        }, 1000);
    }

    updateTime() {
        this.seconds++;
        console.log(this.seconds);
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
        }
    }

    
 

}

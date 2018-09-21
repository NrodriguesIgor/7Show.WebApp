import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { TimerComponent } from './timer-component';

//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
        TimerComponent
    ],
    imports: [
        IonicModule,
       // SharedModule
    ],
    exports: [
        TimerComponent
    ],
    providers: [
        
    ]
})
export class TimerModule { }
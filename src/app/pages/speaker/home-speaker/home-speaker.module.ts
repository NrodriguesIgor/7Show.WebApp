import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'
import { HomeSpeakerPage } from './home-speaker';

//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
        HomeSpeakerPage
    ],
    imports: [
        IonicPageModule.forChild(HomeSpeakerPage),
       // SharedModule
    ],
    exports: [
        HomeSpeakerPage
    ],
    providers: [
        
    ]
})
export class HomeSpeakerModule { }
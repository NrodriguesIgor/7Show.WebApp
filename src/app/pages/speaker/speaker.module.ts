import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { LoginSpeakerModule } from './login-speaker/login-speaker.module';
import { HomeSpeakerModule } from './home-speaker/home-speaker.module';
import { ShowMainModule } from './show-main/show-main.module';
//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
    ],
    imports: [
        IonicModule,
        LoginSpeakerModule,
        HomeSpeakerModule,
        ShowMainModule
       // SharedModule
    ],
    exports: [
        LoginSpeakerModule,
        HomeSpeakerModule,
        ShowMainModule
    ]
})
export class SpeakerModule { }
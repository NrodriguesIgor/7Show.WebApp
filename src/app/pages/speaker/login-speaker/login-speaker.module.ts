import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'
import { LoginSpeakerPage } from './login-speaker';
//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
        LoginSpeakerPage
    ],
    imports: [
        IonicPageModule.forChild(LoginSpeakerPage),
       // SharedModule
    ],
    exports: [
        LoginSpeakerPage
    ],
    providers: [
        
    ]
})
export class LoginSpeakerModule { }
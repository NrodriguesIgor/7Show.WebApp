import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'
import { AskPage } from './ask';

//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
        AskPage
    ],
    imports: [
        IonicPageModule.forChild(AskPage),
       // SharedModule
    ],
    exports: [
        AskPage
    ],
    providers: [
        
    ]
})
export class AskModule { }
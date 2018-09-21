import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'
import { QuestionPage } from './question';

//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
        QuestionPage
    ],
    imports: [
        IonicPageModule.forChild(QuestionPage),
       // SharedModule
    ],
    exports: [
        QuestionPage
    ],
    providers: [
        
    ]
})
export class QuestionModule { }
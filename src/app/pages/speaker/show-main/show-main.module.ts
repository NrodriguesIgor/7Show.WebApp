import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'
import { ShowMainPage } from './show-main';
import { TimerModule } from './timer-component/timer-component.module';
import { AboutModule } from './about/about.module';
import { AskModule } from './ask/ask.module';
import { QuestionModule } from './question/question.module';
import { StreamModule } from './stream/stream.module';

//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
        ShowMainPage
    ],
    imports: [
        IonicPageModule.forChild(ShowMainPage),
        TimerModule,
        AboutModule,
        AskModule,
        QuestionModule,
        StreamModule
       // SharedModule
    ],
    exports: [
        ShowMainPage
    ],
    providers: [
        
    ]
})
export class ShowMainModule { }
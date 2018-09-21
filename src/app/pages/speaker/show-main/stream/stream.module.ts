import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'
import { StreamPage } from './stream';

//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
        StreamPage
    ],
    imports: [
        IonicPageModule.forChild(StreamPage),
       // SharedModule
    ],
    exports: [
        StreamPage
    ],
    providers: [
        
    ]
})
export class StreamModule { }
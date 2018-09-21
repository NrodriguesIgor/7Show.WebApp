import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'
import { AboutPage } from './about';

//import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [
        AboutPage
    ],
    imports: [
        IonicPageModule.forChild(AboutPage),
       // SharedModule
    ],
    exports: [
        AboutPage
    ],
    providers: [
        
    ]
})
export class AboutModule { }
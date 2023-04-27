import { NgModule } from '@angular/core';
import { loaderImageComponent } from './components/loaderImage/loaderImage.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        loaderImageComponent
    ],
    exports:[
        loaderImageComponent        
    ],
    imports:[
        CommonModule
    ]

})
export class sharedModule{

}
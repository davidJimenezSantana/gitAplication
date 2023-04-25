import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { sidebarComponente } from './components/sidebar.component';


@NgModule({
    declarations:[
        sidebarComponente
    ],
    imports:[
        CommonModule
    ],
    exports: [
        sidebarComponente
    ]
})
export class sidebarModule {

}
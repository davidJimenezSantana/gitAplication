import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { homePageComponente } from "./pages/home-page.component";
import { buscadorComponent } from './components/buscadorGif/buscador.component';
import { listaComponen } from "./components/listaGif/lista.component";
import { cardGifComponent } from "./components/cardGif/cardGif.component";
import { sharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        homePageComponente,
        buscadorComponent,
        listaComponen,
        cardGifComponent
    ],
    imports: [
        CommonModule,
        sharedModule
    ],
    exports: [
        homePageComponente
    ]
})
export class gifModule {

} 
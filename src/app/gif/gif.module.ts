import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { homePageComponente } from "./pages/home-page.component";
import { buscadorComponent } from './components/buscadorGif/buscador.component';
import { listaComponen } from "./components/listaGif/lista.component";

@NgModule({
    declarations:[
        homePageComponente,
        buscadorComponent,
        listaComponen
    ],
    imports:[
        CommonModule
    ],
    exports:[
        homePageComponente
    ]
})
export class gifModule{

} 
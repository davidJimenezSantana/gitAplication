import { Component, Input } from "@angular/core";
import { gifService } from '../../services/gif.service';
import { gif } from '../../interfaces/busquedaGifRespuesta.interface';

@Component({
    selector: 'list-gif',
    styleUrls:[
        'lista.component.css'
    ],
    templateUrl: 'lista.component.html'
})
export class listaComponen{
    @Input()
    public listaGisfs:gif[] = []

    //Inyección servicio
    constructor(private gifService: gifService){}

    verHistorial():string[]{
        return this.gifService.gethistoryTag();
    }
    
}
import { Component, Input } from "@angular/core";
import { gif } from '../../interfaces/busquedaGifRespuesta.interface';
import { gifService } from "../../services/gif.service";

@Component({
    selector: 'card-gif',
    templateUrl: 'cardGif.component.html',
    styleUrls: [
        'cardGif.component.css'
    ]
})
export class cardGifComponent{
    @Input()
    public gif!: gif;

}

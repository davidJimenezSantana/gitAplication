import { Component } from "@angular/core";
import { gifService } from '../services/gif.service';
import { gif } from '../interfaces/busquedaGifRespuesta.interface';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls:[
        './home-page.component.css'
    ]
})
export class homePageComponente{

    constructor(private gifService:gifService){}
    
    
    public getGifs() : gif[] {
        return this.gifService.listGif;
    }
}
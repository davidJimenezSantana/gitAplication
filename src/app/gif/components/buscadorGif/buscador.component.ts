import { Component, ElementRef, ViewChild } from "@angular/core";
import { gifService } from '../../services/gif.service';

@Component({
    selector: 'buscador-gif',
    templateUrl: 'buscador.component.html',
    styleUrls: [
        'buscador.component.css'
    ]
})
export class buscadorComponent{
    constructor(private gifService: gifService){};

    //Etiqueta para capturar elemtos del template
    @ViewChild('buscadorInput')
    public tag!: ElementRef<HTMLInputElement>;  

    setTag():void{
        this.gifService.buscarGif(this.tag.nativeElement.value);
        this.tag.nativeElement.value = "";
    }
}
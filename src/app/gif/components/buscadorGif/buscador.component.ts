import { Component, ElementRef, ViewChild } from "@angular/core";
import { historyTagService } from '../../services/historyTag.service';

@Component({
    selector: 'buscador-gif',
    templateUrl: 'buscador.component.html',
    styleUrls: [
        'buscador.component.css'
    ]
})
export class buscadorComponent{
    constructor(private historyTagService: historyTagService){};

    @ViewChild('buscadorInput')
    public tag!: ElementRef<HTMLInputElement>;  

    setTag():void{
        this.historyTagService.setHistory(this.tag.nativeElement.value);
    }
}
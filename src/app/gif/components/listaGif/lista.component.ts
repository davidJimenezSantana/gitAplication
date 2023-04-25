import { Component } from "@angular/core";
import { historyTagService } from '../../services/historyTag.service';

@Component({
    selector: 'list-gif',
    styleUrls:[
        'lista.component.css'
    ],
    templateUrl: 'lista.component.html'
})
export class listaComponen{
    constructor(private historyTagService: historyTagService){}

    verHistorial():string[]{
        return this.historyTagService.gethistoryTag();
    }
}
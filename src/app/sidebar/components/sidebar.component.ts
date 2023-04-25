import { Component } from '@angular/core';
import { historyTagService } from '../../gif/services/historyTag.service';

@Component({
    selector: 'sidebar-comp',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']    
})
export class sidebarComponente{
    constructor(private historyTagService: historyTagService){}

    verHistorial():string[]{
        return this.historyTagService.gethistoryTag();
    }
}
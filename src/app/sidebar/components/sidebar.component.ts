import { ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { gifService } from '../../gif/services/gif.service';

@Component({
    selector: 'sidebar-comp',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']    
})
export class sidebarComponente{

    constructor(private gifService: gifService){}


    verHistorial():string[]{
        return this.gifService.gethistoryTag();
    }

    buscarGif(tag:string){
        this.gifService.buscarGif(tag);
    }
}
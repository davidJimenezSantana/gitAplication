import { Component, Input } from "@angular/core";

@Component({
    selector: 'loader-image',
    templateUrl: './loaderImage.component.html',
    styleUrls:[
        './loaderImage.component.css'
    ]
})
export class loaderImageComponent{
    @Input()
    public url!: string;


    public validarImg: boolean = false;

    imgload(){
        this.validarImg = true;
    }
}
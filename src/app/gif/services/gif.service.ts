import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { gif, respuestaGifHttp } from "../interfaces/busquedaGifRespuesta.interface";

@Injectable({
    providedIn: 'root'
})
export class gifService {

    constructor(private http: HttpClient) { 
        this.verLocalStorage();
    }

    public listGif : gif[] = [];
    private history: string[] = [];
    private apiKey: string = "wL6SI0XPAkTas5V3OuULncJQlsrzFci0"
    private urlgif: string = 'https://api.giphy.com/v1/gifs';



    gethistoryTag() {
        return this.history;
    }

    buscarGif(tag: string) {

        if (!this.manejoHistory(tag)) {
            return;
        }

        this.guardarLocalStorage()
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('q', tag)
            .set('limit', 12);

        this.http.get<respuestaGifHttp>(this.urlgif + '/search?' + params)
            .subscribe(resp => (
                this.listGif = resp.data                            
            ))
    }

    manejoHistory(tag: string): boolean {

        if (tag === '') {
            return false;
        } else {
            tag = tag.toUpperCase();

            if (this.history.includes(tag)) {
                this.history = this.history.filter(ele => ele !== tag)
            }

            this.history.unshift(tag);
            return true;
        }
    }

    guardarLocalStorage():void{
        localStorage.setItem('historialBusqueda',JSON.stringify(this.history));
    }

    verLocalStorage():void{

        if(!localStorage.getItem('historialBusqueda')) return;

        this.history = JSON.parse(localStorage.getItem('historialBusqueda')!);
        this.buscarGif(this.history[0]);
    }

}
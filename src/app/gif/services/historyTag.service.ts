import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class historyTagService {

    constructor(private http: HttpClient){}

    private history: string[] = [];
    private apiKey: string = "wL6SI0XPAkTas5V3OuULncJQlsrzFci0"
    private urlgif: string = 'https://api.giphy.com/v1/gifs';

    

    gethistoryTag() {
        return this.history;
    }

    manejoHistory(tag: string) {
        tag = tag.toUpperCase();
        if (this.history.includes(tag)) {
            this.history = this.history.filter(ele => ele !== tag)
        }
        this.history.unshift(tag);
    }

    setHistory(tag: string) {
        if (tag === '') return;
        this.manejoHistory(tag);

        const params = new HttpParams()
            .set('api_key',this.apiKey)
            .set('q',tag)
            .set('limit',15);

        this.http.get(this.urlgif + '/search?' + params)
            .subscribe(resp => (
                console.log(resp)
            ))
        
    }


}
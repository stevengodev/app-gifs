import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchGifsResponse } from "../../interface/gifs.interface";

@Injectable({
    providedIn : "root"
})
export class GifsService{

    private apikey : string = "29dZG1SKsw2DX4IOFBfNHbuoqGneP0mx"
    private servicioUrl : string = "https://api.giphy.com/v1/gifs"
    private _historial : string[] = []
    public resultados: Gif [] = []

    constructor(private http: HttpClient){

        this._historial = JSON.parse(localStorage.getItem("historial")! ) || []
        this.resultados = JSON.parse(localStorage.getItem("resultados")!) || []

        // if (localStorage.getItem("historial")) {
        //     this._historial = JSON.parse(localStorage.getItem("historial")! ) 
        // }
 
    }
    
    get historial() : string[] {
        return [...this._historial]
    }



    buscarGifs(consulta : string){

        consulta = consulta.toLowerCase()
        
        if(!this._historial.includes(consulta)){
            this._historial.unshift(consulta)
            this._historial = this._historial.splice(0, 10);

            localStorage.setItem("historial", JSON.stringify(this.historial))
        }

        const parametros = new HttpParams()
        .set("api_key", this.apikey)
        .set("q", consulta)
        .set("limit", '10');

        this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params : parametros})
        .subscribe( ( resp ) =>{
            console.log(resp.data)
            this.resultados = resp.data
            localStorage.setItem("resultados", JSON.stringify(this.resultados))

        } )

    }
    


}
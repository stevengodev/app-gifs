import { Injectable } from "@angular/core";


@Injectable({
    providedIn : "root"
})
export class GifsService{

    private _historial : string[] = []

    
    get historial() : string[] {
        return [...this._historial]
    }

    buscarGifs(consulta : string){

        consulta = consulta.toLowerCase()
        
        if(!this._historial.includes(consulta)){
            this._historial.unshift(consulta)
            this._historial = this._historial.splice(0, 10);
        }

        console.log(this.historial)
    }
    


}
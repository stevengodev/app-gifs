import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  // anotacion para vincaular propiedad de referencia
  // el signo de escalamacion significa que estoy seguro que el valor no sera nulo
  @ViewChild('txtGifsABuscar') txtGifs! : ElementRef<HTMLInputElement>;

  buscar(){
    console.log(this.txtGifs.nativeElement.value)

    this.txtGifs.nativeElement.value = ''
  }

}

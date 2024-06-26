import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs/gifs.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor(private gifsService: GifsService){

  }

  // anotacion para vincaular propiedad de referencia
  // el signo de escalamacion significa que estoy seguro que el valor no sera nulo
  @ViewChild('txtGifsABuscar') txtGifs! : ElementRef<HTMLInputElement>;

  buscar(){
    const nombreGifs = this.txtGifs.nativeElement.value

    if (nombreGifs.trim().length === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'El campo no puede estar vacio',
        icon: 'error',
        confirmButtonText: 'Confirmar'
      })    
      return
    }

    this.gifsService.buscarGifs(nombreGifs)
    this.txtGifs.nativeElement.value = ''
  }

}

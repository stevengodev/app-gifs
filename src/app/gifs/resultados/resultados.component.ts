import { Component } from '@angular/core';
import { GifsService } from '../services/gifs/gifs.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [],
  templateUrl: './resultados.component.html',
  styles: ``
})
export class ResultadosComponent {

  constructor(private gifsService : GifsService){}

  get resultados(){
    return this.gifsService.resultados
  }

}

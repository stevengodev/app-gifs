import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs/gifs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebard.component.html'
})
export class SidebardComponent {

  constructor(private gifsService: GifsService){}

  get historialGifs() : string[] {
    return this.gifsService.historial;
  }

}

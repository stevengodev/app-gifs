import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebardComponent } from './shared/sidebard/sidebard.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebardComponent, GifsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-gift';
}

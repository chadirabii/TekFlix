import { Component, Input } from '@angular/core';
import { Films } from '../models/films';

@Component({
  selector: 'app-single-movie',
  standalone: false,
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.css',
})
export class SingleMovieComponent {
  @Input() film!: Films;
  
}

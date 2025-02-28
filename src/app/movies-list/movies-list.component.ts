import { Component } from '@angular/core';
import { Films, FILMS } from '../models/films';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  films: Films[] = FILMS;
}

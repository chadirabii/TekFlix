import { Component } from '@angular/core';
import { FILMS, Films } from './../../models/films'; // Import FILMS array

@Component({
  selector: 'app-list-movie',
  standalone: false,
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
})
export class ListMovieComponent {
  films: Films[] = FILMS;
}

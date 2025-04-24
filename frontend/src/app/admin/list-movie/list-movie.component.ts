import { Component } from '@angular/core';
import { FILMS, Films } from './../../models/films'; // Import FILMS array
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-list-movie',
  standalone: false,
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
})
export class ListMovieComponent {
  films: Films[] = FILMS;

  constructor(private filmService: FilmsService) {}

  ngOnInit() {
    this.filmService.getAll().subscribe((films) => {
      this.films = films;
    });
  }

  deleteFilm(id: number) {
    this.filmService.deleteOne(id).subscribe(() => {
      this.films = this.films.filter((film) => film.id !== id);
    });
  }

  
}

import { Component } from '@angular/core';
import { Films, FILMS } from '../models/films';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-detail',
  standalone: false,
  templateUrl: './movies-detail.component.html',
  styleUrl: './movies-detail.component.css',
})
export class MoviesDetailComponent {
  filmId?: any;
  films: Films[] = FILMS;
  film?: Films;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('inside ngOnInit'),
      (this.filmId = this.route.snapshot.paramMap.get('id')),
      console.log('Film ID: ', this.filmId),
      console.log('Films', this.film);
    this.film = this.films.find((f) => f.id === parseInt(this.filmId));
    console.log('Film : ', this.film);
  }
}

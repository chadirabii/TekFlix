import { Component, Input, input } from '@angular/core';
import { Films, FILMS } from '../models/films';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  categories?: string[] = [];
  films: Films[] = FILMS;
  filteredFilms: Films[] = [];
  activeCategory: string = 'All';

  constructor() {
    this.categories = [
      'All',
      'Action',
      'Comedy',
      'Adventure',
      'Fantasy',
      'Horror',
      'Mistery',
      'Romance',
      'Sci-Fi',
    ];
    this.filteredFilms = this.films;
  }
  filterMovies(category: string): void {
    this.activeCategory = category;
    this.filteredFilms =
      category === 'All'
        ? this.films
        : this.films.filter((film) => film.category === category);
  }
}

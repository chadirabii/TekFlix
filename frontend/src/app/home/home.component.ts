import { Component } from '@angular/core';
import { FILMS, Films } from '../models/films';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  film: Films[] = FILMS;
  constructor(private router: Router) {}

  goToMoviesList() {
    this.router.navigate(['/movies-list']);
  }
}

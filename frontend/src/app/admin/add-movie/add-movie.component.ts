import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-add-movie',
  standalone: false,
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent {
  @ViewChild('movieForm') movieForm!: NgForm;

  movie = {
    title: '',
    description: '',
    genre: '',
    year: '',
    rating: null,
    image: null,
    trailerUrl: '',
  };

  constructor(private filmService: FilmsService) {}

  addMovie() {
    this.filmService.create(this.movie).subscribe((movie) => {
      console.log(movie);
    });
  }

  onSubmit() {
    this.movieForm.form.markAllAsTouched(); // Mark all fields as touched
    if (this.movieForm.form.invalid) {
      return; // Prevent form submission if any field is invalid
    }
    console.log(this.movieForm.form.value); // Log the form value if valid
  }

  isInvalidAndTouchedOrDirty(control: any) {
    return control.invalid && (control.touched || control.dirty); // Check if control is invalid and either touched or dirty
  }
}

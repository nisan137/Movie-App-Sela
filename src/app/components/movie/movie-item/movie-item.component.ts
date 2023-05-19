import { Component, EventEmitter, Input, Output } from '@angular/core';
import Movie from 'src/app/components/movie/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent {
  constructor(public movieService: MovieService) {}

  @Input() movie?: Movie;
  @Output() onDelete = new EventEmitter();

  delete = () => this.onDelete.emit(this.movie);

  editMovie(movie: Movie) {
    this.movieService.edit(movie).subscribe({
      next: (data) => (this.movie = data),
      error: (e) => console.log(e),
    });
  }
}

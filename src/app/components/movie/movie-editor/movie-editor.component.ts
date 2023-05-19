import { Component, EventEmitter, Input, Output } from '@angular/core';
import Movie from 'src/app/components/movie/movie.model';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css'],
})
export class MovieEditorComponent {
  @Input() movie: Movie = new Movie();
  @Output() onSubmit = new EventEmitter();

  submit = () => this.onSubmit.emit(this.movie);
}

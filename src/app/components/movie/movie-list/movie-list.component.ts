import { Component } from '@angular/core';
import Movie from 'src/app/components/movie/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  // movies: Movie[] = [
  //   new Movie(
  //     1,
  //     'Forrest Gump',
  //     1994,
  //     'Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events.All he wants now is to be reunited with his childhood sweetheart, Jenny.',
  //     'https://i.ytimg.com/vi/hf_lCA-T99c/movieposter_en.jpg',
  //     true
  //   ),
  //   new Movie(
  //     2,
  //     'Yesterday',
  //     2019,
  //     "Jack, a struggling musician, meets with an accident during a blackout and wakes up to find out that only he remembers The Beatles. Later, he starts singing the band's songs to gain fame.",
  //     'https://fr.web.img3.acsta.net/pictures/19/06/18/10/50/4755889.jpg',
  //     true
  //   ),
  //   new Movie(
  //     3,
  //     'Bohemian Rhapsody',
  //     2018,
  //     'With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.',
  //     'https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_FMjpg_UX1000_.jpg',
  //     false
  //   ),
  // ];

  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    movieService.get().subscribe((data) => (this.movies = data));
  }

  addNewMovie(movie: Movie) {
    this.movieService.add(movie).subscribe({
      next: (data) => this.movies.push(data),
      error: (e) => console.log(e),
    });
  }

  deleteMovie(movie: Movie) {
    this.movieService.delete(movie).subscribe({
      next: (data) => this.movies.splice(this.movies.indexOf(movie), 1),
      error: (e) => console.log(e),
    });
  }
}

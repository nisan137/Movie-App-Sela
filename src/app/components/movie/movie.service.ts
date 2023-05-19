import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:3000/movies/';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }

  add(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.url, movie);
  }

  edit(movie: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(this.url + movie.id, movie);
  }

  delete(movie: Movie): Observable<Movie> {
    return this.httpClient.delete<Movie>(this.url + movie.id);
  }
}

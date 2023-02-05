import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDataResponse } from '../models/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '7877643c3f04c790e3ad7093bb9d9b5f';
  constructor(private httpRequests: HttpClient) {}

  getMovies(type_of_movie: string = 'upcoming', count: number = 12) {
    return this.httpRequests
      .get<MovieDataResponse>(`${this.baseUrl}/movie/${type_of_movie}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((responseData) => {
          return of(responseData.results.slice(0, count));
        })
      );
  }

  getMovie(id: string) {
    return this.httpRequests.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  searchMovies(page_number: number) {
    return this.httpRequests
      .get<MovieDataResponse>(`${this.baseUrl}/movie/popular?page=${page_number}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((responseData) => {
          return of(responseData.results);
        })
      );
  }
}

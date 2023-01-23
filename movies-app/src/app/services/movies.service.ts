import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private httpRequests: HttpClient) {}

  getMovies() {
    return this.httpRequests.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=7877643c3f04c790e3ad7093bb9d9b5f'
    );
  }
}

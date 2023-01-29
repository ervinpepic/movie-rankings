import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '7877643c3f04c790e3ad7093bb9d9b5f';
  constructor(private httpRequests: HttpClient) {}

  getMovies(type_of_movie: string = 'upcoming') {
    return this.httpRequests.get(`${this.baseUrl}/movie/${type_of_movie}?api_key=${this.apiKey}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe((moviesData) => {
      this.popularMovies = moviesData;
    });
    this.movieService.getMovies('upcoming').subscribe((moviesData) => {
      this.upcomingMovies = moviesData;
    });
    this.movieService.getMovies('top_rated').subscribe((moviesData) => {
      this.topRatedMovies = moviesData;
    });
  }
}

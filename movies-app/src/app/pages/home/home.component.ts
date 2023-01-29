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
    this.movieService.getMovies('popular').subscribe((responseData: any) => {
      this.popularMovies = responseData.results;
    });
    this.movieService.getMovies('upcoming').subscribe((responseData: any) => {
      this.upcomingMovies = responseData.results;
    });
    this.movieService.getMovies('top_rated').subscribe((responseData: any) => {
      this.topRatedMovies = responseData.results;
    });
  }
}

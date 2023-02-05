import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../models/movies';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getMoviesByAPage(1);
  }

  getMoviesByAPage(page_number: number) {
    this.movieService.searchMovies(page_number).subscribe((moviesData) => {
      this.movies = moviesData;
    });
  }

  paginate(event: any) {
    this.getMoviesByAPage(event.page + 1);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../../models/movie-detail';
import { MovieListService } from '../../home-screen/movie-list.service';

@Component({
  selector: 'me-app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  @Input() movieId: string = '';
  movie: MovieDetail = {} as MovieDetail;

  constructor(private movieService: MovieListService) {}

  ngOnInit() {
    this.movieService.fetchMovieById(this.movieId).subscribe((response) => {
      if (response.body) {
        this.movie = response.body;
        console.log(response.body);
      }
    });
  }
}

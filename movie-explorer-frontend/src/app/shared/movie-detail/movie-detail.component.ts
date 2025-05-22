import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../../models/movie-detail';
import { MovieListService } from '../../home-screen/movie-list.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'me-app-movie-detail',
  imports: [LoaderComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  movieId: string = '';
  movie: MovieDetail = {} as MovieDetail;

  constructor(private movieService: MovieListService,private url: ActivatedRoute) {
    this.url.params.subscribe(params => {
      this.movieId = params['id'];
    });
  }

  ngOnInit() {
    this.movieService.fetchMovieById(this.movieId).subscribe((response) => {
      if (response.body) {
        this.movie = response.body;
      }
    });
  }

  addToWatchlist(){
    
  }
}

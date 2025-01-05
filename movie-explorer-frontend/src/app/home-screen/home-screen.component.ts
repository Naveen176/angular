import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../models/movie-card';
import { MovieListService } from '../services/movie-list.service';
import { MovieList } from '../models/movie-list';
import { MovieCardComponent } from '../shared/movie-card/movie-card.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { HOME_MENU } from '../constants/menu';

@Component({
  selector: 'app-home-screen',
  imports: [MovieCardComponent, NavBarComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent implements OnInit {
  title: string = 'Movie Explorer';
  homeMenu: string[] = HOME_MENU;
  moviesList: MovieList = {
    page: 0,
    total_results: 0,
    total_pages: 0,
    results: [],
  };

  selectedMovie: MovieCard = {
    id: 0,
    title: '',
    original_language: '',
    original_title: '',
    overview: '',
    poster_path: '',
    adult: true,
    release_date: '',
  };

  constructor(private movieListService: MovieListService) {}

  ngOnInit() {
    this.movieListService.getMovieList().subscribe((data) => {
      this.moviesList = data;
    });
  }

  onMenuClick($event: Event) {
    console.log($event);
  }

  onMovieSelect($event: MovieCard) {
    this.selectedMovie = $event;
    console.log($event);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCard } from '../models/movie-card';
import { MovieListService } from './movie-list.service';
import {
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from '../models/movie-list';
import { MovieCardComponent } from '../shared/movie-card/movie-card.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { HOME_MENU } from '../constants/menu';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  imports: [MovieCardComponent, NavBarComponent, RouterOutlet, LoaderComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent implements OnInit {
  title: string = 'Movie Explorer';
  homeMenu: string[] = HOME_MENU;
  movieId:string = '';
  nowPlaying: NowPlayingMovies = {
    dates: { maximum: '', minimum: '' },
    page: 0,
    total_results: 0,
    total_pages: 0,
    results: [],
  };

  popular: PopularMovies = {
    page: 0,
    total_results: 0,
    total_pages: 0,
    results: [],
  };

  topRated: TopRatedMovies = {
    page: 0,
    total_results: 0,
    total_pages: 0,
    results: [],
  };

  upcoming: UpcomingMovies = {
    dates: { maximum: '', minimum: '' },
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

  constructor(
    private router: Router,
    private movieListService: MovieListService
  ) {}

  ngOnInit(): void {
    this.movieListService.fetchNowPlaying();
    this.movieListService.getNowPlaying().subscribe((data) => {
      this.nowPlaying = data;
    });

    this.movieListService.fetchPopular();
    this.movieListService.getPopular().subscribe((data) => {
      this.popular = data;
    });

    this.movieListService.fetchTopRated();
    this.movieListService.getTopRated().subscribe((data) => {
      this.topRated = data;
    });

    this.movieListService.fetchUpcoming();
    this.movieListService.getUpcoming().subscribe((data) => {
      this.upcoming = data;
    });
  }

  onMenuClick($event: Event) {
    console.log($event);
  }

  onMovieSelect($event: MovieCard) {
    this.selectedMovie = $event;
    console.log($event);
  }

  goToContinueWatching() {
    this.router.navigate(['home/continue-watching']);
  }
  goToLatestReleases() {
    this.router.navigate(['home/latest-releases']);
  }
  goToTopRated() {
    this.router.navigate(['home/top-rated']);
  }
  goToUpComing() {
    this.router.navigate(['home/upcoming-releases']);
  }
}

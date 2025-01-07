import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
} from '../constants/api';
import {
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from '../models/movie-list';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  private nowplayingMovies = new BehaviorSubject<NowPlayingMovies>(
    {} as NowPlayingMovies
  );
  private popularMovies = new BehaviorSubject<PopularMovies>(
    {} as PopularMovies
  );
  private topRatedMovies = new BehaviorSubject<TopRatedMovies>(
    {} as TopRatedMovies
  );
  private upcomingMovies = new BehaviorSubject<UpcomingMovies>(
    {} as UpcomingMovies
  );
  options: any;
  constructor(private http: HttpClient) {
    this.options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNThiNWEzY2Y3MWE4OWVlMTgxOGY2NTA3MzRkNWY5MyIsIm5iZiI6MTczNTk3MTg4Ny45NjEsInN1YiI6IjY3NzhkNDJmZjZiYzk3MTZlODcyNDc0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yzBSrUH4hp_PZLLVVFMBYKBCMnBs7aBvrzMwGmq7aoU',
      },
    };
  }

  fetchNowPlaying(): void {
    this.http
      .get<NowPlayingMovies>(NOW_PLAYING_MOVIES, {
        headers: this.options.headers,
        observe: 'response',
      })
      .subscribe((response) => {
        this.nowplayingMovies.next(response.body as NowPlayingMovies);
      });
  }
  getNowPlaying(): Observable<NowPlayingMovies> {
    return this.nowplayingMovies.asObservable();
  }

  fetchPopular(): void {
    this.http
      .get<PopularMovies>(POPULAR_MOVIES, {
        headers: this.options.headers,
        observe: 'response',
      })
      .subscribe((response) => {
        this.popularMovies.next(response.body as PopularMovies);
      });
  }
  getPopular(): Observable<PopularMovies> {
    return this.popularMovies.asObservable();
  }

  fetchTopRated(): void {
    this.http
      .get<TopRatedMovies>(TOP_RATED_MOVIES, {
        headers: this.options.headers,
        observe: 'response',
      })
      .subscribe((response) => {
        this.topRatedMovies.next(response.body as TopRatedMovies);
      });
  }
  getTopRated(): Observable<TopRatedMovies> {
    return this.topRatedMovies.asObservable();
  }
  fetchUpcoming(): void {
    this.http
      .get<UpcomingMovies>(UPCOMING_MOVIES, {
        headers: this.options.headers,
        observe: 'response',
      })
      .subscribe((response) => {
        this.upcomingMovies.next(response.body as UpcomingMovies);
      });
  }
  getUpcoming(): Observable<UpcomingMovies> {
    return this.upcomingMovies.asObservable();
  }
}

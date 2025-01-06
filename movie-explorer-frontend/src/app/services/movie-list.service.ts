import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
} from '../constants/api';
import { NowPlayingMovies, PopularMovies, TopRatedMovies, UpcomingMovies } from '../models/movie-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
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

  getNowPlaying():Observable<HttpResponse<NowPlayingMovies>> {
    return this.http.get<NowPlayingMovies>(NOW_PLAYING_MOVIES, { headers:this.options.headers,observe: 'response' });
  }
  getPopular():Observable<HttpResponse<PopularMovies>> {
    return this.http.get<PopularMovies>(POPULAR_MOVIES,  { headers:this.options.headers,observe: 'response' });
  }
  getTopRated():Observable<HttpResponse<TopRatedMovies>> {
    return this.http.get<TopRatedMovies>(TOP_RATED_MOVIES, { headers:this.options.headers,observe: 'response' });
  }
  getUpcoming():Observable<HttpResponse<UpcomingMovies>> {
    return this.http.get<UpcomingMovies>(UPCOMING_MOVIES, { headers:this.options.headers,observe: 'response' });
  }
}

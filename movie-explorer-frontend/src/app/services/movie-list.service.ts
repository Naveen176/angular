import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POPULAR_MOVIES } from '../constants/api';
import { MovieList } from '../models/movie-list';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http : HttpClient) { 

  }

  getMovieList(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNThiNWEzY2Y3MWE4OWVlMTgxOGY2NTA3MzRkNWY5MyIsIm5iZiI6MTczNTk3MTg4Ny45NjEsInN1YiI6IjY3NzhkNDJmZjZiYzk3MTZlODcyNDc0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yzBSrUH4hp_PZLLVVFMBYKBCMnBs7aBvrzMwGmq7aoU'
      }
    };
    return this.http.get<MovieList>(POPULAR_MOVIES,options)
  }
}

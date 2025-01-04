import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private http: HttpClient) {
    console.log(this.getMoviesList);
  }
  getMoviesList() {
    return this.http.get('https://api.themoviedb.org/3/account/21728126');
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieCard } from '../../models/movie-card';

@Component({
  selector: 'me-app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  showMore: boolean = false;

  @Input() movie: MovieCard = {
    id:0,
    title:'',
    original_language:'',
    original_title:'',
    overview:'',
    poster_path:'',
    adult:true,
    release_date:'',
  };
  
  @Output() movieSelected = new EventEmitter<MovieCard>();

  onMovieClick(movie: MovieCard) {
    console.log("shwmore :",this.showMore)
    this.movieSelected.emit(movie);
  }
}

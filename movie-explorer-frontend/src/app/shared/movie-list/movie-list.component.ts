import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'me-app-movie-list',
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  @Input() moviesList: string[] = [];
  @Output() movieSelected = new EventEmitter<string>();

  onMovieClick(movie: string) {
    this.movieSelected.emit(movie);
  }
}

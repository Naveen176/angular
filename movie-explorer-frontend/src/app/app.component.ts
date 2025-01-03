import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from "./shared/movie-list/movie-list.component";
@Component({
  selector: 'me-app-root',
  imports: [RouterOutlet,MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-explorer-frontend';
}

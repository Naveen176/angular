import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListService } from './home-screen/movie-list.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from "./shared/movie-detail/movie-detail.component";
@Component({
  selector: 'me-app-root',
  imports: [RouterOutlet, HttpClientModule, MovieDetailComponent],
  providers: [MovieListService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movie-explorer-frontend';
}

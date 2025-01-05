import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListService } from './services/movie-list.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'me-app-root',
  imports: [RouterOutlet, HttpClientModule,],
  providers: [MovieListService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movie-explorer-frontend';
}

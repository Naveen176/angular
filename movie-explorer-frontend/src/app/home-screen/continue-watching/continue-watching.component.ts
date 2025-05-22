import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { NowPlayingMovies } from '../../models/movie-list';
import { MovieCardComponent } from "../../shared/movie-card/movie-card.component";
import { Router } from '@angular/router';
import { LoaderComponent } from "../../shared/loader/loader.component";
import { MovieCard } from '../../models/movie-card';

@Component({
  selector: 'me-app-continue-watching',
  imports: [MovieCardComponent, LoaderComponent],
  templateUrl: './continue-watching.component.html',
  styleUrl: './continue-watching.component.css'
})
export class ContinueWatchingComponent implements OnInit {
  nowplaying:NowPlayingMovies = {} as NowPlayingMovies;
  constructor(private movieService:MovieListService, private router:Router) { }

  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe((response)=>{
      this.nowplaying = response;
    });
    window.scrollTo(0, 0);
  }
  selectedMovie($event: MovieCard) {
    this.router.navigate(['/home/movie-detail',$event.id])
  }
  back(){
    this.router.navigate(['/home']);
  }
}

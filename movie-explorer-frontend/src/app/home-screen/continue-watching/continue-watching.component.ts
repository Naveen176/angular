import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { NowPlayingMovies } from '../../models/movie-list';
import { MovieCardComponent } from "../../shared/movie-card/movie-card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'me-app-continue-watching',
  imports: [MovieCardComponent],
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
  selectedMovie($event: any) {
    console.log($event);
  }
  back(){
    this.router.navigate(['/home']);
  }
}

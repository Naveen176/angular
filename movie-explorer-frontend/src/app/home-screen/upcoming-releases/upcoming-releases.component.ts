import { Component, OnInit } from '@angular/core';
import { UpcomingMovies } from '../../models/movie-list';
import { MovieListService } from '../movie-list.service';
import { Router } from '@angular/router';
import { MovieCardComponent } from "../../shared/movie-card/movie-card.component";

@Component({
  selector: 'app-upcoming-releases',
  imports: [MovieCardComponent],
  templateUrl: './upcoming-releases.component.html',
  styleUrl: './upcoming-releases.component.css'
})
export class UpcomingReleasesComponent implements OnInit {
  upcoming:UpcomingMovies = {} as UpcomingMovies;
  constructor(private movieService:MovieListService, private router:Router) { 
  }

  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe((response)=>{
      this.upcoming = response;
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

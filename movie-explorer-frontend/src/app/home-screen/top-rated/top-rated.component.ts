import { Component, OnInit } from '@angular/core';
import { TopRatedMovies } from '../../models/movie-list';
import { MovieListService } from '../movie-list.service';
import { Router } from '@angular/router';
import { MovieCardComponent } from "../../shared/movie-card/movie-card.component";

@Component({
  selector: 'app-top-rated',
  imports: [MovieCardComponent],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css'
})
export class TopRatedComponent implements OnInit {
  topRated:TopRatedMovies = {} as TopRatedMovies;
  constructor(private movieService:MovieListService, private router:Router) { }

  ngOnInit(): void {
    this.movieService.getTopRated().subscribe((response)=>{
      this.topRated = response;
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


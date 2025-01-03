import { Component, EventEmitter, Input, Output } from '@angular/core';
import { searchBar } from '../../models/search-bar.model';

@Component({
  selector: 'me-app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() searchBarConfig :searchBar | undefined;
  
  @Output() search = new EventEmitter<string>()

  searchMovie(){
    this.search.emit("Hii");
  }
}

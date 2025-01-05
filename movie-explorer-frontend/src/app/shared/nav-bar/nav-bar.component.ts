import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HOME_MENU } from '../../constants/menu';

@Component({
  selector: 'me-app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @Input() menuItems: string[] = [];
  @Output() menuItemClicked = new EventEmitter<string>();
  
  onMenuItemClick(menuItem: string) {
    this.menuItemClicked.emit(menuItem);    
    console.log('Menu item clicked: ', menuItem);
  }
}

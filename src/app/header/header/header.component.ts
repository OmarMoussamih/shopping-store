import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() toggleMenu = new EventEmitter<string>();

  onSelectMenuItem(feature) {
    this.toggleMenu.emit(feature);
  }
}
 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-store';

  selectedFeature: string = 'recipe';


  onFeatureSelect(feature: string) {
    this.selectedFeature = feature;
  }
}

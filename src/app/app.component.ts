import { Component } from '@angular/core';
import { SlideDefinition } from './slider/slider.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      <ec-slider>
        <ec-dot-navigation></ec-dot-navigation>
        <ec-vertical-rotator [speed]="2000" [width]="800" [height]="600">
          <ec-spinning-slide ecSlide *ngFor="let slide of spinningSlides" [definition]="slide"></ec-spinning-slide>
          <ec-static-slide ecSlide *ngFor="let slide of staticSlides" [definition]="slide"></ec-static-slide>
        </ec-vertical-rotator>
        <ec-dot-navigation></ec-dot-navigation>
      </ec-slider>
    </div>`
})
export class AppComponent {


  spinningSlides: SlideDefinition[] = [
    {
      backgroundImage: "assets/images/schoenbrunn.png",
      caption: "Schönbrunn Palace",
      description: "A former imperial summer residence.",
    },
  ];

  staticSlides: SlideDefinition[] = [
    {
      backgroundImage: "assets/images/stephansdom.png",
      caption: "St. Stephen's Cathedral",
      description: "One of the most iconic buildings in Vienna."
    },
    {
      backgroundImage: "assets/images/riesenrad.png",
      caption: "Wiener Riesenrad",
      description: "Was the world's tallest extant Ferris wheel till 1985."
    }
  ];
}

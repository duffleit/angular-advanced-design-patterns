import { Component, OnInit, Input } from '@angular/core';
import { SliderComponent, SlideDefinition } from '../slider/slider.component';

@Component({
  selector: 'ec-dot-navigation',
  template: `
    <div class="dot-container">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
  `,
  styleUrls: ['./dot-navigation.component.scss']
})
export class DotNavigationComponent implements OnInit {

  constructor(
    private slider: SliderComponent
  ) { }

  get slides() {
    return this.slider.slides;
  }

  goToSlide(slide: SlideDefinition){
    this.slider.currentSlide.next(slide);
  }

  ngOnInit() {
  }

}

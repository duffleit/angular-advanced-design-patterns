import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';
import { SpinningSlideComponent } from '../spinning-slide/spinning-slide.component';
import { SlideDirective } from '../slide.directive';
import { Slide } from '../slide';

@Component({
  selector: 'ec-slider',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @ContentChildren(SlideDirective, {descendants: true, read: Slide })
  slideComponents: QueryList<Slide>;

  currentSlide: Subject<SlideDefinition> = new Subject();

  get slides(): SlideDefinition[] {
    console.log(this.slideComponents.toArray());
    return this.slideComponents.toArray().map(s => s.getDefinition());
  }
}

export interface SlideDefinition {
  backgroundImage: String,
  caption: String,
  description: String,
}


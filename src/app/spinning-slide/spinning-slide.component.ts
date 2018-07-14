import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { SlideDefinition } from '../slider/slider.component';
import { Slide } from '../slide';

@Component({
  selector: 'ec-spinning-slide',
  template: `
    <div class="slide">
      <div class="spinner" [ngStyle]="{'background-image': 'url(' + definition.backgroundImage + ')'}">></div>
      <div class="caption">
        <div class="title">{{definition.caption}}</div>
        <div class="description">{{definition.description}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./spinning-slide.component.scss'],
  providers: [
    { provide: Slide, useExisting: SpinningSlideComponent }
  ]
})
export class SpinningSlideComponent implements Slide{

  @Input()
  definition: SlideDefinition;

  getDefinition(): SlideDefinition {
    return this.definition;
  }
}

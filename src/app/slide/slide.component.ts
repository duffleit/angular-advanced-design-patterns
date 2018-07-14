import { Component, OnInit, Input } from '@angular/core';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';
import { Slide } from '../slide';

@Component({
  selector: 'ec-static-slide',
  template: `
    <div class="slide"
      [ngStyle]="{'background-image': 'url(' + definition.backgroundImage + ')'}">
      <div class="caption">
        <div class="title">{{definition.caption}}</div>
        <div class="description">{{definition.description}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./slide.component.scss'],
  providers: [
    { provide: Slide, useExisting: SlideComponent }
  ]
})
export class SlideComponent implements Slide {

  getDefinition(): SlideDefinition {
    return this.definition;
  }

  @Input()
  definition: SlideDefinition;

}

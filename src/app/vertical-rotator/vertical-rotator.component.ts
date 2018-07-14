import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'ec-vertical-rotator',
  template: `
    <div class="slider-container" [ngStyle]="{'width.px': width, 'height.px': height}">
      <div class="screen" [ngStyle]="{'margin-top.px': offset}">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./vertical-rotator.component.scss']
})
export class VerticalRotatorComponent implements OnInit {

  constructor(
    private slider: SliderComponent
  ) { }

  @Input()
  width: number;
  @Input()
  height: number;
  @Input()
  speed: number = 2000;

  public offset: number;
  private intervalSubscriber: any;

  ngOnInit(): void {
    this.intervalSubscriber = interval(this.speed).subscribe(val => {
      const currentSlideIndex = val % this.slider.slides.length;
      const currentSlide = this.slider.slides[currentSlideIndex];
      this.slider.currentSlide.next(currentSlide);
    })
    this.slider.currentSlide.subscribe(slide => {
      const currentSlideIndex = this.slider.slides.indexOf(slide);
      this.goToSlide(currentSlideIndex);
    })
  }

  goToSlide(currentSlideIndex: number) {
    this.offset = currentSlideIndex * this.height * -1;
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';
import { VerticalRotatorComponent } from './vertical-rotator/vertical-rotator.component';
import { DotNavigationComponent } from './dot-navigation/dot-navigation.component';
import { SpinningSlideComponent } from './spinning-slide/spinning-slide.component';
import { SlideDirective } from './slide.directive';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SlideComponent,
    VerticalRotatorComponent,
    DotNavigationComponent,
    SpinningSlideComponent,
    SlideDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { SlideDefinition } from "./slider/slider.component";

export abstract class Slide{
  abstract getDefinition(): SlideDefinition;
}

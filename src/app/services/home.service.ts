import { Injectable } from '@angular/core';
import { SLIDER } from '../mock/slider.mock';
import { Observable, of } from 'rxjs';
interface Slider {
  id: number;
  imgPath: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getSlider(): Observable<Slider[]> {
    const slider = of(SLIDER);
    return slider;
  }
}

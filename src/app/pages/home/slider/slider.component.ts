import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
interface Slider {
  id: number;
  imgPath: string;
  title: string;
}
@Component({
  selector: 'app-home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  sliders: Slider[] = [];

  constructor(private _sliderService: HomeService) {}

  ngOnInit() {
    this._sliderService.getSlider().subscribe((slider) => {
      this.sliders = slider;
    });
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 20,
    autoplay: true,
    pagination: false,
    pauseOnMouseEnter: true,
  };
}

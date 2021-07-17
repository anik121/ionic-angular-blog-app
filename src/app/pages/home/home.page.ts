import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
interface Slider {
  id: number;
  imgPath: string;
  title: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sliders: Slider[] = [];
  isBookmark: boolean = false;
  constructor(private _sliderService: HomeService) {}

  ngOnInit() {
    this._sliderService.getSlider().subscribe((slider) => {
      this.sliders = slider;
    });
  }
  onBookmarkSliderPost(id: number) {
    this.isBookmark = !this.isBookmark;
    console.log('successfully Bookmarked ' + id);
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 20,
  };
}

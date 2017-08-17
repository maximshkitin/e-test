import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { sliderItems } from "./slider-items";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  private _sliderItems = sliderItems;

  private config: Object;

  constructor() { }

  ngOnInit() {
    this.config = {
      pagination: '.swiper-pagination',
      paginationClickable: true
    };
  }

}

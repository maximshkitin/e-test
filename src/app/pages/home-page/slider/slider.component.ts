import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppService } from "../../../app.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  private config: Object;
  private slides: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getSlides().then(slides => {
      this.slides = slides
    });
    this.config = {
      pagination: '.swiper-pagination',
      paginationClickable: true
    };
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-wrapper',
  styles: [`
    agm-map {
      height: 500px;
    }
    @media only screen and (max-width: 479px) {
      agm-map {
        height: 300px;
      }
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng" [scrollwheel]="scrollwheel" [zoom]="zoom"></agm-map>
  `
})
export class GmapsComponent {
  lat: number = 62.3323037;
  lng: number = 24.9233122;
  zoom: number = 13;
  scrollwheel: boolean = false;
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'angular2-useful-swiper';
import { ContactSectionModule } from "../../components/contact-section/contact-section.module";
import { QuoteSectionModule } from "../../components/quote-section/quote-section.module";


import { HomePageComponent } from "./home-page.component";
import { SliderComponent } from './slider/slider.component';


@NgModule({
    imports: [CommonModule, SwiperModule, ContactSectionModule, QuoteSectionModule],
    declarations: [
        HomePageComponent,
        SliderComponent,
    ],
    exports: [HomePageComponent]
  })
export class HomePageModule { 

}
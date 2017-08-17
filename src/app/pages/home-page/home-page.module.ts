import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'angular2-useful-swiper';
import { ContactSectionModule } from "../../components/contact-section/contact-section.module";
import { QuoteSectionModule } from "../../components/quote-section/quote-section.module";


import { HomePageComponent } from "./home-page.component";
import { SliderComponent } from './slider/slider.component';
import { ThumbsComponent } from './thumbs/thumbs.component';
import { VillasPreviewComponent } from './villas-preview/villas-preview.component';


@NgModule({
    imports: [CommonModule, SwiperModule, ContactSectionModule, QuoteSectionModule],
    declarations: [
        HomePageComponent,
        SliderComponent,
        ThumbsComponent,
        VillasPreviewComponent
    ],
    exports: [HomePageComponent]
  })
export class HomePageModule { 

}
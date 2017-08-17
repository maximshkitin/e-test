import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { QuoteSectionComponent } from "../quote-section/quote-section.component";

@NgModule({
    imports: [CommonModule],
    declarations: [QuoteSectionComponent],
    exports: [QuoteSectionComponent]
  })
export class QuoteSectionModule { 

}
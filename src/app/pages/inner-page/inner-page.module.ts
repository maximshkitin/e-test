import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSectionModule } from "../../components/contact-section/contact-section.module";
import { GmapsModule } from "../../components/gmaps/gmaps.module";
import { QuoteSectionModule } from "../../components/quote-section/quote-section.module";

import { InnerPageComponent } from "../inner-page/inner-page.component";

@NgModule({
    imports: [CommonModule, ContactSectionModule, QuoteSectionModule, GmapsModule],
    declarations: [
        InnerPageComponent,
    ],
    exports: [InnerPageComponent]
  })
export class InnerPageModule { 

}
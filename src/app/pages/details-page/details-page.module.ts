import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormSectionModule } from './form-section/form-section.module';

import { DetailsPageComponent } from "../details-page/details-page.component";
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
    imports: [CommonModule, FormsModule,FormSectionModule],
    declarations: [
        DetailsPageComponent,
        PopUpComponent,
    ],
    exports: [DetailsPageComponent]
  })
export class DetailsPageModule { 

}
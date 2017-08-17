import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormSectionComponent } from './form-section/form-section.component';
import { DetailsPageComponent } from "../details-page/details-page.component";
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        FormSectionComponent,
        DetailsPageComponent,
        PopUpComponent,
    ],
    exports: [DetailsPageComponent]
  })
export class DetailsPageModule { 

}
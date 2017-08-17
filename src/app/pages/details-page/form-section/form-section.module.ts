import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from "ngx-bootstrap/datepicker";

import { FormSectionComponent } from './form-section.component';

@NgModule({
    imports: [CommonModule, FormsModule,DatepickerModule.forRoot()],
    declarations: [
        FormSectionComponent,
    ],
    exports: [FormSectionComponent]
  })
export class FormSectionModule { 

}
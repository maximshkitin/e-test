import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactSectionComponent } from "../contact-section/contact-section.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ContactSectionComponent],
    exports: [ContactSectionComponent]
  })
export class ContactSectionModule { 

}
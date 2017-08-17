import { Component, OnInit } from '@angular/core';

import { ContactSectionComponent } from "../../components/contact-section/contact-section.component";
import { QuoteSectionComponent } from "../../components/quote-section/quote-section.component";

import { AppService } from "../../app.service";

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.scss']
})
export class InnerPageComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  openDetails(id: number) {
    this.appService.openDetails(id);
  }
}

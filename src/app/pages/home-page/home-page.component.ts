import { Component, OnInit } from '@angular/core';

import { ContactSectionComponent } from "../../components/contact-section/contact-section.component";
import { QuoteSectionComponent } from "../../components/quote-section/quote-section.component";

import { AppService } from "../../app.service";

import { Router } from "@angular/router";
import { thumbs } from "./thumbnails";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private _thumbs = thumbs;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
  }

  openDetails(id: number) {
    this.appService.openDetails(id);
    return false;
  }

}

import { Component, OnInit } from '@angular/core';

import { AppService } from "../../../app.service";

import { VillasDescription } from "./../../../interfaces/villas-description";

@Component({
  selector: 'app-villas-description',
  templateUrl: './villas-description.component.html',
  styleUrls: ['./villas-description.component.scss']
})
export class VillasDescriptionComponent implements OnInit {

  private data: VillasDescription[]

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getVillasDescription().then(data => {
      this.data = data
    })
  }

  openDetails(id: number) {
    this.appService.openDetails(id);
  }
  
}

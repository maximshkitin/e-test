import { Component, OnInit } from '@angular/core';
// import { VillasPreview } from "./../../../villas-preview";

import { AppService } from "../../../app.service";

import { VillasPreview } from "../../../interfaces/villas-preview";

@Component({
  selector: 'app-villas-preview',
  templateUrl: './villas-preview.component.html',
  styleUrls: ['./villas-preview.component.scss']
})
export class VillasPreviewComponent implements OnInit {

  villas: VillasPreview[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getVillasPreview().then(data => {
      this.villas = data;
    });
  }

  openDetails(id: number) {
    this.appService.openDetails(id);
    return false;
  }

}

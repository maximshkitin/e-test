import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from "../../../app.service";
import { Thumbnail } from "../../../interfaces/thumbnail";

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThumbsComponent implements OnInit {

  private thumbs: Thumbnail[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getThumbnails().then(thumbs => {
      this.thumbs = thumbs
    });
  }

}

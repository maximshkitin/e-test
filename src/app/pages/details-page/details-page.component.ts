import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { AppService } from "../../app.service";

import { Subscription } from "rxjs/subscription";

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  id: number;
  data: any;
  imageUrl: string;
  currentUrl: string;
  subscription: Subscription;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.subscription = this.route.queryParamMap
      .map((params) => this.appService.getDetail(this.id))
      .subscribe(promise => {
        promise.then(data => {
          this.data = data
          this.currentUrl = window.location.href;
        })
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  enlargeImage(src: string) {
    this.imageUrl = src;
      document.getElementsByTagName('html')[0].classList.add('of-hidden');
    
  }

  disablePopUp() {
    this.imageUrl = '';
    document.getElementsByTagName('html')[0].classList.remove('of-hidden');
  }

}

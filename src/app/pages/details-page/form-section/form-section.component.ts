import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSectionComponent implements OnInit {

  field1: string;
  field2: string;
  field3: string;
  field4: string;

  constructor(
  ) {}

  ngOnInit() {
  }

}

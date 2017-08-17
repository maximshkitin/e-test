import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Daterangepicker } from 'ng2-daterangepicker';
// import { DaterangepickerConfig } from 'ng2-daterangepicker';
// import { DaterangePickerComponent } from 'ng2-daterangepicker';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss'],
  // providers: [DaterangepickerConfig, DaterangePickerComponent]
})
export class FormSectionComponent implements OnInit {

  field1: string;
  field2: string;
  field3: string;
  field4: string;

  constructor(
    // private dpOptions: DaterangepickerConfig,
    // private picker: DaterangePickerComponent
  ) {
   }

  ngOnInit() {
    // this.dpOptions.settings = {
    //   locale: { format: 'YYYY-MM-DD' },
    //   alwaysShowCalendars: false
    // }
  }

  ngAfterViewInit() {
    // this.picker.datePicker.setStartDate('2017-08-21');
    // this.picker.datePicker.setEndDate('2017-08-25');
  }

}

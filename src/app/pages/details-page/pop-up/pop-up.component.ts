import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() imageUrl: string;
  @Output() disable = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  closePopUp(e) {
    let _class = e.target.classList;
    if (_class.contains('featherlight') || _class.contains('featherlight-close')) {
      this.imageUrl = '';
      this.disable.emit();
    }
  }

  

}

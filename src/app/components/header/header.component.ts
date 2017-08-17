import { Component, OnInit } from '@angular/core';
import { RouterLinkActive }  from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    let menuClass = document.getElementById('main-navigation').classList;
    let isActive = menuClass.contains('active');
    if (isActive)
      menuClass.remove('active')
    else menuClass.add('active');
  }

  closeMenu(){
    let menuClass = document.getElementById('main-navigation').classList;
    let isActive = menuClass.contains('active');
    if (isActive)
      menuClass.remove('active')
  }

}

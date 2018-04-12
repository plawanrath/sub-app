import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class DashboardComponent implements OnInit {

  state = 'hide'

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elementOffsetTop = document.getElementById("div2").offsetTop;
    const firstImgOffset = document.getElementById("imgDiv").offsetHeight;
    if(window.pageYOffset > firstImgOffset-200) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }  
}

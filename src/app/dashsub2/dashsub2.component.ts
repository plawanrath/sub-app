import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dashsub2',
  templateUrl: './dashsub2.component.html',
  styleUrls: ['./dashsub2.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class Dashsub2Component implements OnInit {

  state = 'hide';

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elementOffsetTop = document.getElementById('content2').offsetTop;
    const firstImgOffset = document.getElementById('content').offsetHeight;
    if (window.pageYOffset > firstImgOffset + 100) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}

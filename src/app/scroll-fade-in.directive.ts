import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appScrollFadeIn]'
})
export class ScrollFadeInDirective {

  constructor(private element: ElementRef,private renderer: Renderer) { }

  @Input('appScrollFadeIn') scrollTo: string;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elementOffsetTop = document.getElementById(this.scrollTo).offsetTop;
    if(elementOffsetTop > window.pageYOffset) {
      console.log("less than page offset")
    } 
  }
}

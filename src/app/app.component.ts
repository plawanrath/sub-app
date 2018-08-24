import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./w3.css',
    './app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private route: Router) {}
  ngOnInit() {

  }

  isSplash() {
    return this.route.url.indexOf('splash') >= 0;
  }

}

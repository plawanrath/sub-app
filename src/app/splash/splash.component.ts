import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToDashBoard() {
    this.router.navigate(['./dashboard']);
  }

}

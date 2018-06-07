import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume2',
  templateUrl: './volume2.component.html',
  styleUrls: ['./volume2.component.css']
})
export class Volume2Component implements OnInit {

  articleNo: number = 1;
  NoOfArticles: number = 7;
  constructor() { }

  ngOnInit() {
  }

  nextArticle() {
    if(this.articleNo < this.NoOfArticles) {
      this.articleNo++;
    }
  }

  previousArticle() {
    if(this.articleNo > 1) {
      this.articleNo--;
    }
  }}

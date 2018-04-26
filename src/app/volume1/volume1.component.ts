import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume1',
  templateUrl: './volume1.component.html',
  styleUrls: ['./volume1.component.css']
})
export class Volume1Component implements OnInit {

  articleNo: number = 1;
  NoOfArticles: number = 3;
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
  }
}

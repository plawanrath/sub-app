import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume1',
  templateUrl: './volume1.component.html',
  styleUrls: ['../../app/w3.css',
'../dashboard/dashboard.component.css',
'./volume1.component.css']
})
export class Volume1Component implements OnInit {

  articleNo = 1;
  NoOfArticles = 4;
  constructor() { }

  ngOnInit() {
  }

  nextArticle() {
    if (this.articleNo < this.NoOfArticles) {
      this.articleNo++;
    }
  }

  previousArticle() {
    if (this.articleNo > 1) {
      this.articleNo--;
    }
  }
}

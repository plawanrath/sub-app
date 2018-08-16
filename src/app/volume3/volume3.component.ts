import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume3',
  templateUrl: './volume3.component.html',
  styleUrls: ['../../app/w3.css',
'../dashboard/dashboard.component.css',
'./volume3.component.css']
})
export class Volume3Component implements OnInit {

  articleNo = 1;
  NoOfArticles = 5;
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
  }}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume2',
  templateUrl: './volume2.component.html',
  styleUrls: ['../../app/w3.css',
'../dashboard/dashboard.component.css',
'./volume2.component.css']
})
export class Volume2Component implements OnInit {

  articleNo = 1;
  NoOfArticles = 7;
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

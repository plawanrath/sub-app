import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume4',
  templateUrl: './volume4.component.html',
  styleUrls: ['./volume4.component.css']
})
export class Volume4Component implements OnInit {

  articleNo = 1;
  NoOfArticles = 6;
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

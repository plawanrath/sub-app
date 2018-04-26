import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume5',
  templateUrl: './volume5.component.html',
  styleUrls: ['./volume5.component.css']
})
export class Volume5Component implements OnInit {

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
  }}

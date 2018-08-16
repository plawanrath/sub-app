import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['../../app/w3.css',
'../dashboard/dashboard.component.css',
'./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[] = [
    new Video('Shri Guru Bhagavat - An Introduction', 'W8yrLI62ELI'),
    new Video('Release of Shri Guru Bhagavat Vol1', 'KI7x8C8JqQg'),
    new Video('Release of Shri Guru Bhagavat Vol2', '8NbaI-eXl1o'),
    new Video('The Origin of Shri Guru Bhagavat', 'bHNkGpEmKAY')
  ];
  Url = 'https://www.youtube.com/embed/';
  videoUrl: SafeResourceUrl;
  videoNo = 1;
  NoOfVideos = 4;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    const res = this.Url + this.videos[0].Embed;
    this.UpdateSafeUrl(res);
  }

  UpdateSafeUrl(url: string) {
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  nextVideo() {
    if (this.videoNo < this.NoOfVideos) {
      this.videoNo++;
      const res = this.Url + this.videos[this.videoNo - 1].Embed;
      this.UpdateSafeUrl(res);
    }
  }

  previousVideo() {
    if (this.videoNo > 1) {
      this.videoNo--;
      const res = this.Url + this.videos[this.videoNo - 1].Embed;
      this.UpdateSafeUrl(res);
    }
   }
}

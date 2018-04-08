import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { VideosComponent } from './videos/videos.component';
import { Volume1Component } from './volume1/volume1.component';
import { Volume2Component } from './volume2/volume2.component';
import { Volume3Component } from './volume3/volume3.component';
import { Volume4Component } from './volume4/volume4.component';
import { Volume5Component } from './volume5/volume5.component';
import { AuthorComponent } from './author/author.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VideosComponent,
    Volume1Component,
    Volume2Component,
    Volume3Component,
    Volume4Component,
    Volume5Component,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

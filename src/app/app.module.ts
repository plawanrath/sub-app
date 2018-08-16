import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ScrollToModule } from 'ng2-scroll-to-el';
import { ScrollFadeInDirective } from './scroll-fade-in.directive';
import { Dashsub2Component } from './dashsub2/dashsub2.component';
import { PrayerComponent } from './prayer/prayer.component';
import { SgbqaComponent } from './sgbqa/sgbqa.component';
import { SgbapiService } from './sgbapi.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { SplashComponent } from './splash/splash.component';

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
    AuthorComponent,
    ScrollFadeInDirective,
    Dashsub2Component,
    PrayerComponent,
    SgbqaComponent,
    SplashComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [SgbapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { Volume1Component } from './volume1/volume1.component';
import { Volume2Component } from './volume2/volume2.component';
import { Volume3Component } from './volume3/volume3.component';
import { Volume4Component } from './volume4/volume4.component';
import { Volume5Component } from './volume5/volume5.component';
import { AuthorComponent } from './author/author.component';
import { PrayerComponent } from './prayer/prayer.component';
import { SgbqaComponent } from './sgbqa/sgbqa.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'sgbqa', component: SgbqaComponent },
  { path: 'prayer', component: PrayerComponent },
  { path: 'volume1', component: Volume1Component },
  { path: 'volume2', component: Volume2Component },
  { path: 'volume3', component: Volume3Component },
  { path: 'volume4', component: Volume4Component },
  { path: 'volume5', component: Volume5Component },
  { path: 'author', component: AuthorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

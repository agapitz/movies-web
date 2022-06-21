import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { AgmCoreModule } from '@agm/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

// import * as FusionCharts from 'fusioncharts';
// import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
// import { FusionChartsModule } from 'angular4-fusioncharts';

import { LocalService } from './local.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RewardComponent } from './reward/reward.component';
import { RewardsViewComponent } from './rewards-view/rewards-view.component';
import { HomeComponent } from './home/home.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    RewardComponent,
    RewardsViewComponent,
    HomeComponent,
    ViewMovieComponent,
    MovieViewComponent,
    ScheduleComponent
  ],
  imports: [
    NgbModule,
    NgScrollbarModule,
    NgQRCodeReaderModule,
    NgQrScannerModule,
    QRCodeModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDViULOn9svfkunutdtn5X7fnOyCMt0JA4'
    }),
    BrowserAnimationsModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

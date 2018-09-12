import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleChartsBaseService } from './google-charts-base.service';
import { GooglePieChartService } from './google-pie-chart.service';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GoogleChartsBaseService,
    GooglePieChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

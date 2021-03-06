import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './google-charts-base.service';
import { PieChartConfig } from './Models/pie-charts-config';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: string, data: any[], config: PieChartConfig) : void {
    var chartFunc = () => {
      return new google.visualization.PieChart(document.getElementById(elementId));
    };
    var options = {
      title: config.title,
      pieHole: config.pieHole,
    };

    this.build(data, chartFunc, options);
  }
}

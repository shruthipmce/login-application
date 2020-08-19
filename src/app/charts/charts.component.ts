import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  single: any[]= [
    {
      "name": "Pooja",
      "value": 1994
    },
    {
      "name": "Jyothi",
      "value": 2000
    },
    {
      "name": "Hema",
      "value": 1992
    },
    {
      "name": "Archana",
      "value": 2004
    }
  ];
  multi: any[];

  view: any[] = [800, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Students';
  showYAxisLabel = true;
  yAxisLabel = 'Years';
  yScaleMax = 2010;
  yScaleMin = 1990;
  barPadding = 50;

  colorScheme = {
    domain:['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  


}

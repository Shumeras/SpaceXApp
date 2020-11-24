import { Component, OnInit } from '@angular/core';
import { MissionData } from '../common/mission-data';
import { DataFetcherService } from '../services/data-fetcher.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  dataPromise: Promise<MissionData[]>;

  constructor(private dataFetcher: DataFetcherService) { }

  ngOnInit(): void {
    this.dataPromise = this.dataFetcher.getUpcomingMissionsAsync();
  }

}

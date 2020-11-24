import { Component, OnInit } from '@angular/core';
import { MissionData } from '../common/mission-data';
import { DataFetcherService } from '../services/data-fetcher.service';

@Component({
  selector: 'app-previous-page',
  templateUrl: './previous-page.component.html',
  styleUrls: ['./previous-page.component.scss']
})
export class PreviousPageComponent implements OnInit {

  dataPromise: Promise<MissionData[]>;

  constructor(private dataFetcher: DataFetcherService) { }

  ngOnInit(): void {
    this.dataPromise = this.dataFetcher.getPastMissionsAsync();
  }

}

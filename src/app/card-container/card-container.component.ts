import { Component, Input, OnInit, Output } from '@angular/core';
import { MissionData } from '../common/mission-data';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  @Input()  dataPromise:  Promise<MissionData[]>
            data: MissionData[]
            isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.dataPromise
      .then(
        (obj) =>
        {
          this.data = obj;
          this.isLoading = false;
          console.log(this.data);
        }
      )
  }

}

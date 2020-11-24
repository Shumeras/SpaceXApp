import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MissionData } from '../common/mission-data';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  constructor(private http: HttpClient) { }

  private formatData(obj: any, returnReverse: boolean = false): MissionData[]
  {
    let result: MissionData[] = [];
    for (const m of obj) {
      result.push({
          name: m.name,
          details: m.details,
          webcast: m.links.webcast,
          article: m.links.article,
          wiki: m.links.wikipedia,
          date: m.date_utc,
          images: m.links.flickr.original
        }
      )
    }

    if(returnReverse)
      return result.reverse();

    return  result;
  }

  async getUpcomingMissionsAsync(): Promise<MissionData[]> {
    let result : any;
    
    await this.http.get("https://api.spacexdata.com/v4/launches/upcoming", {responseType: "json"})
      .toPromise()
      .then((obj) => result = obj)

    return this.formatData(result);
  }

  async getPastMissionsAsync(): Promise<MissionData[]> {
    let result : any;
    
    await this.http.get("https://api.spacexdata.com/v4/launches/past", {responseType: "json"})
      .toPromise()
      .then((obj) => result = obj)

    return this.formatData(result, true);
  }

  
}

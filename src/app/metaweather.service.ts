import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MetaweatherService {
  constructor(private http: HttpClient) {}

  getWeatherApi(lat:any, long:any) {
    return this.http.get(
      `https://www.7timer.info/bin/civillight.php?lon=${long}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`
    );
  }
}

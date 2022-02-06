import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MetaweatherService } from '../metaweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .slice(0, 10);
  public dayAfterTomorrow = new Date(
    new Date().setDate(new Date().getDate() + 2)
  )
    .toISOString()
    .slice(0, 10);
  public twoDaysAfterTomorrow = new Date(
    new Date().setDate(new Date().getDate() + 3)
  )
    .toISOString()
    .slice(0, 10);
  weatherSearchForm = FormGroup.prototype;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private metaWeatherService: MetaweatherService
  ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      lat: [''],
      long: [''],
    });
    // this.getWeather(lat, long);
  }

  getWeather(lat: any, long: any) {
    this.metaWeatherService.getWeatherApi(lat, long).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
}

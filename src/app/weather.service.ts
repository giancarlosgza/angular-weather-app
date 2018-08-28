import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  apiKey = '3cd185a060bd682fb9847c655727f8ea';
  url;
  urlForecast;

  constructor(private http: Http) {
    this.url          ='http://api.openweathermap.org/data/2.5/weather?q=';
    this.urlForecast  ='http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&units=metric&lang=en' + '&APPID=' + this.apiKey).map(res => res.json());

  }

  getWeatherForecast(city, code) {
    return this.http.get(this.urlForecast + city + ',' + code + '&units=metric&lang=en' + '&APPID=' + this.apiKey).map(res => res.json());

  }

}

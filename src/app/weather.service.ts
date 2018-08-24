import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '3cd185a060bd682fb9847c655727f8ea';
  url;

  constructor(private http: Http) {
    this.url ='http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&units=metric&lang=es' + '&APPID=' + this.apiKey).map(res => res.json());

  }

}

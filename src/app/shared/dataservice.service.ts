import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Weather } from '../models/weatherComp';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  weather!: Weather;
  // endpoint: string = 'http://api.weatherstack.com/current?access_key=347eed77a0be3175452ef3295fb7d676&query=popayan,colombia'
  endpoint: string = 'http://api.weatherstack.com/current?access_key=347eed77a0be3175452ef3295fb7d676'
  cities: string = ''

  constructor(private http:HttpClient) { }

  public getWeather(ciudad: string,pais: string): Observable<Weather> {
    return this.http.get<Weather>(this.endpoint + "&query=" + ciudad + "," + pais);
  }
}

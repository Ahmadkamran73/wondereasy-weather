import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForecastResponse } from '../models/weather.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private apiKey = environment.openWeatherApiKey;

  constructor(private http: HttpClient) {}

  getForecast(city: string): Observable<ForecastResponse> {
    return this.http.get<ForecastResponse>(`${this.baseUrl}?q=${city}&units=metric&appid=${this.apiKey}`);
  }
}

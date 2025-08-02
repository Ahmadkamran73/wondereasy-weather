import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { Forecast } from '../../models/weather.model';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ForecastDisplayComponent implements OnChanges {
  @Input() city = '';
  forecastData: Forecast[] = [];
  error = '';

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(): void {
    this.error = '';
    this.forecastData = [];
    if (this.city) {
      this.weatherService.getForecast(this.city).subscribe({
        next: (data) => {
          this.forecastData = data.list.slice(0, 5); // show first 5 time blocks
        },
        error: () => {
          this.error = 'Could not fetch weather data. Please try another city.';
        }
      });
    }
  }
}

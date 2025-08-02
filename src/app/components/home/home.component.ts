import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent {
  features = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Global Coverage',
      description: 'Get weather forecasts for cities worldwide'
    },
    {
      icon: 'fas fa-clock',
      title: 'Real-time Data',
      description: 'Up-to-date weather information from reliable sources'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Friendly',
      description: 'Optimized for all devices and screen sizes'
    },
    {
      icon: 'fas fa-chart-line',
      title: '5-Day Forecast',
      description: 'Detailed weather predictions for the week ahead'
    }
  ];
} 
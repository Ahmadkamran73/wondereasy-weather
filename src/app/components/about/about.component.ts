import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Weather Team',
      role: 'Development Team',
      description: 'Passionate developers creating accurate weather solutions',
      icon: 'fas fa-users'
    },
    {
      name: 'OpenWeatherMap',
      role: 'Data Provider',
      description: 'Reliable weather data from trusted meteorological sources',
      icon: 'fas fa-cloud-sun'
    },
    {
      name: 'Angular Framework',
      role: 'Technology Stack',
      description: 'Modern web development with cutting-edge technologies',
      icon: 'fab fa-angular'
    }
  ];

  features = [
    'Real-time weather data',
    'Global city coverage',
    '5-day forecasts',
    'Mobile responsive design',
    'Accurate predictions',
    'User-friendly interface'
  ];
} 
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CitySelectorComponent {
  @Output() citySelected = new EventEmitter<string>();

  cities: string[] = [
    'London', 'Paris', 'New York', 'Tokyo', 'Berlin', 'Rome', 'Istanbul', 'Moscow', 'Dubai', 'Toronto',
    'Sydney', 'Beijing', 'Cairo', 'Mumbai', 'Lahore', 'Karachi', 'Bangkok', 'Singapore', 'Cape Town', 'Los Angeles',
    'Madrid', 'Barcelona', 'Vienna', 'Lisbon', 'Warsaw', 'Seoul', 'Jakarta', 'Hanoi', 'Budapest', 'Kuala Lumpur',
    'Oslo', 'Helsinki', 'Stockholm', 'Prague', 'Brussels', 'Zurich', 'Geneva', 'Doha', 'Riyadh', 'Tehran',
    'Baghdad', 'Manila', 'Nairobi', 'Johannesburg', 'Rio de Janeiro', 'Buenos Aires', 'Santiago', 'Athens', 'Mexico City', 'San Francisco'
  ];

  selectCity(city: string): void {
    this.citySelected.emit(city);
  }
}

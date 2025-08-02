import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CitySearchComponent {
  @Output() citySelected = new EventEmitter<string>();
  
  searchTerm = '';
  isSearchOpen = false;
  
  allCities = [
    'London', 'Paris', 'New York', 'Tokyo', 'Berlin', 'Rome', 'Istanbul', 'Moscow', 'Dubai', 'Toronto',
    'Sydney', 'Beijing', 'Cairo', 'Mumbai', 'Lahore', 'Karachi', 'Bangkok', 'Singapore', 'Cape Town', 'Los Angeles',
    'Madrid', 'Barcelona', 'Vienna', 'Lisbon', 'Warsaw', 'Seoul', 'Jakarta', 'Hanoi', 'Budapest', 'Kuala Lumpur',
    'Oslo', 'Helsinki', 'Stockholm', 'Prague', 'Brussels', 'Zurich', 'Geneva', 'Doha', 'Riyadh', 'Tehran',
    'Baghdad', 'Manila', 'Nairobi', 'Johannesburg', 'Rio de Janeiro', 'Buenos Aires', 'Santiago', 'Athens', 'Mexico City', 'San Francisco'
  ];
  
  get filteredCities() {
    if (!this.searchTerm) return [];
    return this.allCities.filter(city => 
      city.toLowerCase().includes(this.searchTerm.toLowerCase())
    ).slice(0, 8);
  }
  
  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) {
      this.searchTerm = '';
    }
  }
  
  selectCity(city: string): void {
    this.citySelected.emit(city);
    this.searchTerm = city;
    this.isSearchOpen = false;
  }
  
  onSearchInput(): void {
    if (this.searchTerm.length > 0) {
      this.isSearchOpen = true;
    } else {
      this.isSearchOpen = false;
    }
  }
} 
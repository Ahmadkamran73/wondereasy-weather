import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { ForecastDisplayComponent } from './components/forecast-display/forecast-display.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule, 
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CitySearchComponent,
    CitySelectorComponent, 
    ForecastDisplayComponent,
    FooterComponent
  ]
})
export class AppComponent {
  selectedCity = '';
  currentView = 'home'; // 'home', 'forecast', 'about', 'contact'

  onCitySelected(city: string): void {
    this.selectedCity = city;
    this.currentView = 'forecast';
  }

  onNavigation(page: string): void {
    this.currentView = page;
    this.selectedCity = ''; // Reset selected city when navigating
  }

  goToHome(): void {
    this.currentView = 'home';
    this.selectedCity = '';
  }
}

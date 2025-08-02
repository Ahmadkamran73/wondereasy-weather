import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarComponent {
  isMenuOpen = false;
  @Output() navigationEvent = new EventEmitter<string>();

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(page: string): void {
    this.navigationEvent.emit(page);
    this.isMenuOpen = false; // Close mobile menu after navigation
  }
} 
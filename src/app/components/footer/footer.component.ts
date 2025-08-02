import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = {
    product: [
      { name: 'Weather Forecast', link: '#' },
      { name: 'City Search', link: '#' },
      { name: 'Travel Weather', link: '#' },
      { name: 'API Documentation', link: '#' }
    ],
    company: [
      { name: 'About Us', link: '#' },
      { name: 'Contact', link: '#' },
      { name: 'Careers', link: '#' },
      { name: 'Privacy Policy', link: '#' }
    ],
    support: [
      { name: 'Help Center', link: '#' },
      { name: 'FAQ', link: '#' },
      { name: 'Report Bug', link: '#' },
      { name: 'Feature Request', link: '#' }
    ]
  };

  socialLinks = [
    { icon: 'fab fa-twitter', name: 'Twitter', link: '#' },
    { icon: 'fab fa-facebook', name: 'Facebook', link: '#' },
    { icon: 'fab fa-linkedin', name: 'LinkedIn', link: '#' },
    { icon: 'fab fa-github', name: 'GitHub', link: '#' },
    { icon: 'fab fa-instagram', name: 'Instagram', link: '#' }
  ];

  newsletterEmail = '';

  subscribeNewsletter(): void {
    if (this.newsletterEmail.trim()) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      alert('Thank you for subscribing to our newsletter!');
      this.newsletterEmail = '';
    }
  }
} 
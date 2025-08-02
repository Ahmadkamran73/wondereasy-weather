import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'support@wandereasyweather.com',
      link: 'mailto:support@wandereasyweather.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Weather City, WC 12345',
      link: '#'
    }
  ];

  socialLinks = [
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      link: '#'
    },
    {
      icon: 'fab fa-facebook',
      name: 'Facebook',
      link: '#'
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      link: '#'
    },
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      link: '#'
    }
  ];

  onSubmit(): void {
    // Handle form submission
    console.log('Contact form submitted:', this.contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    this.resetForm();
  }

  resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
} 
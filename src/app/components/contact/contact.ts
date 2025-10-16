import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialNetwork {
  name: string;
  username: string;
  iconClass: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  socialNetworks: SocialNetwork[] = [
    {
      name: 'WhatsApp',
      username: '+58 4125591537',
      iconClass: 'bi bi-whatsapp',
      url: 'https://wa.me/584125591537',
      color: '#25D366'
    },
    {
      name: 'Facebook',
      username: 'Ronald Villarreal',
      iconClass: 'bi bi-facebook',
      url: 'https://facebook.com/ronald.villarreal',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      username: '@rsvp.08',
      iconClass: 'bi bi-instagram',
      url: 'https://www.instagram.com/rsvp.08/',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      username: 'Ronald Villarreal',
      iconClass: 'bi bi-linkedin',
      url: 'https://www.linkedin.com/in/ronald-villarreal-rsvp08ven',
      color: '#32567aff'
    },
    {
      name: 'GitHub',
      username: 'Rsvp08VEN',
      iconClass: 'bi bi-github',
      url: 'https://github.com/Rsvp08VEN',
      color: '#333'
    },
    {
      name: 'Telegram',
      username: '@RonaldsVp08',
      iconClass: 'bi bi-telegram',
      url: 'https://t.me/RonaldsVp08',
      color: '#0088CC'
    }
  ];

  openSocialNetwork(url: string): void {
    window.open(url, '_blank');
  }
}

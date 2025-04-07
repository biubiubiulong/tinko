import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor() {}

  onLoginClick(): void {
    // Hide the login banner
    const loginBanner = document.querySelector('.login-banner') as HTMLElement;
    loginBanner.style.display = 'none';

    // Show the images
    const content = document.getElementById('content');
    if (content) {
      content.classList.remove('hidden');
    }

    // Apply delay animations on images
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach((img, index) => {
    //   img.style.animationDelay = `${index * 0.5}s`; // Stagger animations
    });
  }
}

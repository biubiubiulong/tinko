import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: string[] = [
    'assets/images/Japan1.jpg',
    'assets/images/Japan2.jpg',
    'assets/images/Japan3.jpg'
  ];
  currentImageIndex = 0;
  currentImage = this.images[0];

  ngOnInit(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 4000);
  }

}

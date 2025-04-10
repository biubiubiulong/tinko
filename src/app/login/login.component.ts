import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  images: string[] = [
    'assets/images/Japan1.jpg',
    'assets/images/Japan2.jpg',
    'assets/images/Japan3.jpg'
  ];
  currentImageIndex = 0;
  currentImage = this.images[0];

  searchText: string = '';
  isFocused: boolean = false;

  isCartView = false;

  ngOnInit(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 4000);
  }

  clearSearch() {
    this.searchText = ''; 
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }  
  
  enterCartView() {
    this.isCartView = true;
  }
  
  existCartView() {
    this.isCartView = true;
  }
}

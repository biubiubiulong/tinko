import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  // Cart view content goes here, for example, an array of products
  products = [
    { image: 'assets/images/Japan1.jpg', description: 'Product Description 1', priceId: 'price_12345' },
    { image: 'assets/images/Japan2.jpg', description: 'Product Description 2', priceId: 'price_67890' }
  ];
  stripe: any;
  elements: any;

  async ngOnInit() {
    // Load Stripe
    this.stripe = await loadStripe('YOUR_STRIPE_PUBLIC_KEY'); // Replace with your Stripe public key
  }

  async handlePayment() {
    // Create an instance of the payment method
    const {error} = await this.stripe.redirectToCheckout({
      lineItems: [
        {price: 'price_12345', quantity: 1}, // Your price ID
      ],
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
    });

    if (error) {
      console.log('Error:', error);
    }
  }
}
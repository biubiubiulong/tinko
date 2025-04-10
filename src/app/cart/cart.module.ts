import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from '../cart-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MatIconModule,
    CartRoutingModule
  ]
})
export class CartModule {}

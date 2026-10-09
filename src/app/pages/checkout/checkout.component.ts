import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  selectedPaymentMethod: 'card' | 'mpesa' | 'airtel' = 'card';

  selectPaymentMethod(method: 'card' | 'mpesa' | 'airtel') {
    this.selectedPaymentMethod = method;
  }
}

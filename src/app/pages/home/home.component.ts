import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProducts = [
    {
      id: 1,
      slug: 'organic-bananas',
      name: 'Organic Bananas (Bunch)',
      price: 2.99,
      oldPrice: 3.50,
      isOnSale: true,
      image: 'https://via.placeholder.com/400x400/4CAF50/fff?text=Bananas'
    },
    {
      id: 2,
      slug: 'whole-wheat-bread',
      name: 'Fresh Whole Wheat Bread',
      price: 3.49,
      isOnSale: false,
      image: 'https://via.placeholder.com/400x400/FF9800/fff?text=Bread'
    },
    {
      id: 3,
      slug: 'farm-fresh-eggs',
      name: 'Farm Fresh Eggs (Dozen)',
      price: 4.99,
      isOnSale: false,
      image: 'https://via.placeholder.com/400x400/8BC34A/fff?text=Eggs'
    },
    {
      id: 4,
      slug: 'atlantic-salmon',
      name: 'Fresh Atlantic Salmon',
      price: 12.99,
      oldPrice: 15.00,
      isOnSale: true,
      image: 'https://via.placeholder.com/400x400/333333/fff?text=Salmon'
    }
  ];
}

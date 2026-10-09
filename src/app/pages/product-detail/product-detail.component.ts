import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;
  activeTab = 'info';
  quantity = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.product = {
        name: 'Organic Bananas (Bunch)',
        price: 2.99,
        oldPrice: 3.50,
        description: 'Our organic bananas are sweet, delicious, and perfectly ripe. Sourced locally from fair-trade farms to ensure you get the best quality while supporting sustainable agriculture.',
        image: 'https://via.placeholder.com/600x600/4CAF50/fff?text=Bananas',
        gallery: [
          'https://via.placeholder.com/150x150/4CAF50/fff?text=Thumb+1',
          'https://via.placeholder.com/150x150/FF9800/fff?text=Thumb+2',
          'https://via.placeholder.com/150x150/8BC34A/fff?text=Thumb+3'
        ]
      };
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}

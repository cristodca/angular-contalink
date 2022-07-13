import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() onDelete: EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
    if(this.product) {
      this.product.amount = this.product.price * this.product.quantity;
    }
  }

  deleteProduct() {
    this.onDelete.emit(this.product);
  }

}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default
})

export class HomeComponent implements OnInit {

  products: Product[] = [
    {
      name: 'a',
      price: 1,
      quantity: 2,
    },
    {
      name: 'b',
      price: 1,
      quantity: 2,
    },
    {
      name: 'c',
      price: 1,
      quantity: 2,
    },
    {
      name: 'd',
      price: 1,
      quantity: 2,
    },
    {
      name: 'e',
      price: 1,
      quantity: 2,
    },
  ]
  activeAlert: Boolean = false;
  type: string = 'primary';
  alertStyle = {
    backgroundColor: 'yellow'
  }

  constructor() { }

  ngOnInit(): void {
  }

  removeItemFromProducts(product: Product) {
    // this.products = this.products.filter(prod => 
    //   (prod.name !== product.name)
    // )
    console.log('remove');
    let productToDelete:number = this.products.findIndex(prod => 
      (prod.name === product.name)
    )
    console.log(productToDelete);
  
    this.products.splice(productToDelete, 1)
    this.activeAlert = true
    // this.type = 'danger'
  }
}

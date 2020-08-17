import { Component, OnInit } from '@angular/core';
import { products } from '../../products'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor() { }

  ngOnInit() {
    this.products = products;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentProduct: string;
  products: string[];

  constructor() { }

  ngOnInit(): void {
    this.currentProduct = '';
    this.products = [];
  }

  addProduct(): void {
    this.products.push(this.currentProduct);
    this.currentProduct = '';
  }

  deleteProduct(i: number): void {
    this.products.splice(i, 1);
  }
}

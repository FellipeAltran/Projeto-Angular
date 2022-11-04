import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  createProduct (): void {
    this.productService.showMessage('O Fellipe é Foda !')
  }

  cancel (): void {
    this.productService.showMessage('Cancelado !')
  }
}

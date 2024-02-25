import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  products: ProductModel[] = [];
  @Input()  maxPrice: number = 10;//Now we will make this as input so parent component can pass dynamic values
  filteredProducts: ProductModel[] = [];
  @Output() productCountChanged = new EventEmitter<number>();


  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredProducts=this.products.filter(f=>f.price<=this.maxPrice);
    this.productCountChanged.emit(this.filteredProducts.length);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(10).subscribe((d) => {
      this.products = d;
      this.filteredProducts = d; //assign initially for this as well
      this.productCountChanged.emit(this.filteredProducts.length);// we do in start of component as well once
    });
  }
}

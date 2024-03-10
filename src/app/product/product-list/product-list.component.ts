import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  products: ProductModel[] = [];
  @Input() maxPrice: number = 5000;
  @Output() productCountChanged = new EventEmitter<number>();  
  filteredProducts: ProductModel[]=[];

  constructor(private productService: ProductService,
    private cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges() {
    console.log('2. ngOnChanges');    
    this.filteredProducts = this.products.filter(f=>f.price<=this.maxPrice);    
    this.productCountChanged.emit(this.filteredProducts.length);
  }

  getProducts() {    
    this.productService.getProducts(10).subscribe((d) => {      
      this.products = d;
      this.filteredProducts = d;
      this.productCountChanged.emit(this.filteredProducts.length);
    });
  }

  addToCart(product:ProductModel): void {
    const cartModel:CartModel={
      productId: product.productId,
      cartId: 0,
      userId: 0,
      quantity: product.quantity
    };
    
    this.cartService.addToCart(cartModel);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}

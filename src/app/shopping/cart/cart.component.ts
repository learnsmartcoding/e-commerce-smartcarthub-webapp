import { Component } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: ProductModel[] = [];
  cartItems: CartModel[] = [];
  cartProducts: ProductModel[] = [];

  backgroundImageUrl = 'url("assets/img/breadcrumb.jpg")';
  totalAmount = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.cartProducts = [];
    this.getProducts();
  }

  removeItemFromCart(id: number) {
    this.cartService.removeFromCart(id).subscribe((d) => this.getCartDetails());
  }

  getProducts() {
    this.productService.getProducts(500).subscribe((data) => {
      this.products = data;
      this.getCartDetails();
    });
  }

  updateQuantity(product: ProductModel): void {
    const cartModel: CartModel = {
      cartId: product.cartId || 0,
      userId: 0,
      productId: product.productId,
      quantity: product.quantity,
    };

    this.cartService.updateCart(cartModel).subscribe(() => {
      this.getCartDetails();
    });
  }

  incrementQuantity(product: ProductModel): void {
    if (product) {
      product.quantity = (product.quantity || 0) + 1;
      this.updateQuantity(product);
    }
  }

  decrementQuantity(product: ProductModel): void {
    if (product && product.quantity && product.quantity > 1) {
      product.quantity -= 1;
      this.updateQuantity(product);
    }
  }

  getCartDetails() {
    this.totalAmount = 0;
    this.cartService.getCart().subscribe((data) => {
      this.cartProducts = [];
      this.cartItems = data;

      this.cartItems.forEach((cartItem) => {
        const product = this.products.find(
          (product) => +product.productId === +cartItem.productId
        );

        if (product) {
          const productToAdd: ProductModel = {
            productId: product.productId,
            productName: product.productName,
            productDescription: product.productDescription,
            price: product.price,
            quantity: cartItem.quantity,
            categoryId: product.categoryId,
            productImages: product.productImages,
            cartId: cartItem.cartId,
          };
          this.cartProducts.push(productToAdd);

          this.totalAmount += productToAdd.price * cartItem.quantity;
        }
      });
    });
  }
}

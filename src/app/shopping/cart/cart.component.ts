import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductModel[] = [];
  backgroundImageUrl = 'url("assets/img/breadcrumb.jpg")';
  totalAmount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartDetails();
  }

  //if user removes an item on cart page we call service and remove it.
  removeItemFromCart(id: number) {
    this.cartService.removeFromCart(id);
    this.getCartDetails();//we call and update the page again
  }

  getCartDetails() {
    this.totalAmount=0;
    this.cartItems = this.cartService.getCart();
    this.cartItems.forEach((f) => {
      this.totalAmount = this.totalAmount + f.price * f.quantity; // we add all product total cost
    });
  }

}

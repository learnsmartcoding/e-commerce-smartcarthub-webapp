import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartLocalStorageService {
  private cartKey = 'cart';
  private cartSubject = new BehaviorSubject<number>(0);
  cart$: Observable<number> = this.cartSubject.asObservable();

  constructor(private toastrService: ToastrService) {}

  getCart(): ProductModel[] {
    const cartData = localStorage.getItem(this.cartKey);
    const cart = cartData ? JSON.parse(cartData) : [];
    this.cartSubject.next(cart.length); // Notify subscribers
    return cart;
  }

  addToCart(item: ProductModel): void {
    item.quantity = 1;
    const cart = this.getCart();
    const existingItem = cart.find(
      (cartItem) => cartItem.productId === item.productId
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { ...item, quantity: 1 };
      cart.push(newItem);
    }

    this.saveCart(cart);
    this.cartSubject.next(cart.length); // Notify subscribers
    this.toastrService.success(
      `Added ${item.productName} to cart`,
      'Cart updated'
    );
  }

  clearCart(): void {
    this.saveCart([]);
  }

  removeFromCart(productId: number): void {
    const cart = this.getCart().filter((item) => item.productId !== productId);
    this.toastrService.info(`Item removed from cart!`, 'Cart updated');
    this.saveCart(cart);
  }

  private saveCart(cart: ProductModel[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.cartSubject.next(cart.length); // Notify subscribers
  }
}

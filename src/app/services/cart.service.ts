import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { CartModel } from '../models/cart.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: ProductModel[] = [];
  private cartUrl = `${environment.apiBaseUrl.carts}/carts`;
  private cartSubject = new BehaviorSubject<number>(0);
  cart$: Observable<number> = this.cartSubject.asObservable();

  private cartTotalSubject = new BehaviorSubject<number>(0);
  cartTotal$: Observable<number> = this.cartTotalSubject.asObservable();

  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    private productService: ProductService
  ) {
    this.productService.getProducts(500).subscribe((d) => (this.products = d));
  }

  getCart(): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(this.cartUrl).pipe(
      tap((cart) => {
        this.cartSubject.next(cart.length);
        this.updateCartTotal();
      })
    );
  }

  addToCart(item: CartModel): void {
    this.getCart().subscribe((cart) => {
      const existingItem = cart.find(
        (cartItem) => cartItem.productId === item.productId
      );

      if (existingItem) {
        existingItem.quantity += 1;

        // Update existing item
        this.updateCart(existingItem).subscribe();
      } else {
        item.quantity = 1;

        // Add new item
        this.addNewItemToCart(item);
      }
    });
  }

  clearCart(): void {
    this.http.delete(this.cartUrl).subscribe(() => {
      this.cartSubject.next(0); // Notify subscribers
      this.toastrService.success('Cart cleared', 'Cart updated');
    });
  }

  removeFromCart(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.cartUrl}/${productId}`).pipe(
      tap(() => {
        this.getCart().subscribe((cart) => {
          this.cartSubject.next(cart.length); // Notify subscribers
          this.updateCartTotal();
          this.toastrService.info('Item removed from cart!', 'Cart updated');
        });
      })
    );
  }

  private addNewItemToCart(item: CartModel): void {
    this.http.post(this.cartUrl, item).subscribe(() => {
      this.getCart().subscribe((cart) => {
        this.cartSubject.next(cart.length); // Notify subscribers
        this.updateCartTotal();
        this.toastrService.success(`Added to cart`, 'Cart updated');
      });
    });
  }

  updateCart(item: CartModel): Observable<CartModel[]> {
    return this.http.put<void>(`${this.cartUrl}`, item).pipe(
      switchMap(() =>
        this.getCart().pipe(
          tap((cart) => {
            this.cartSubject.next(cart.length); // Notify subscribers
            this.toastrService.success(`Updated quantity`, 'Cart updated');
          })
        )
      )
    );
  }

  updateCartTotal() {
    let totalAmount = 0;
    this.getCart().subscribe((data) => {
      data.forEach((cartItem) => {
        const product = this.products.find(
          (product) => +product.productId === +cartItem.productId
        );

        if (product) {
          totalAmount += product.price * cartItem.quantity;
        }
      });
      this.cartTotalSubject.next(totalAmount);
    });
  }
}

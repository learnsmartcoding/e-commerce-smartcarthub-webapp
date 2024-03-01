import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  @Input() timeoutSeconds: number = -1;
  cartItems$!:Observable<number>;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartItems$=this.cartService.cart$;
  }


}

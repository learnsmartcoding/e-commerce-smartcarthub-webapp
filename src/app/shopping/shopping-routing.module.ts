import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from '../shopping/wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}

export const routedComponents = [
WishlistComponent,
CartComponent
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from '../shopping/wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { canActivateAdminGuard } from '../guards/admin.guard';
import { canActivateGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [canActivateGuard],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [canActivateGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [canActivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}

export const routedComponents = [
  WishlistComponent,
  CartComponent,
  CheckoutComponent,
];

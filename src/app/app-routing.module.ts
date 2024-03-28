import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { canActivateAdminGuard } from './guards/admin.guard';
import { canActivateGuard } from './guards/login.guard';
import { canActivateAdminChildGuard } from './guards/admin-child.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./shopping/shopping.module').then((m) => m.ShoppingModule),
  },
  {
    path: 'user/address',
    canActivate: [canActivateGuard],
    loadChildren: () =>
      import('./address/address.module').then((m) => m.AddressModule),
  },
  {
    path: 'admin',
    canActivate: [canActivateAdminGuard],
    canActivateChild: [canActivateAdminChildGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user/orders',
    canActivate: [canActivateGuard],
    loadChildren: () =>
      import('./orders/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSearchResultComponent } from './product-search-result/product-search-result.component';
import { productResolver } from '../resolvers/product.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shop' },
  { path: 'shop', component: ShopComponent },
  { path: 'search', component: ProductSearchResultComponent },
  {
    path: 'detail/:productId',
    component: ProductDetailsComponent,
    resolve: { productData: productResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

export const routedComponents = [
  ProductDetailsComponent,
  ShopComponent,
  ProductSearchResultComponent,
];

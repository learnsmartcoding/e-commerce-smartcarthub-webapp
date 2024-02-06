import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductSearchResultComponent } from './product-search-result/product-search-result.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shop' },
  { path: 'shop', component: ShopComponent },
  { path: 'search', component: ProductSearchResultComponent },
  { path: 'detail/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

export const routedComponents = [
    ShopComponent,
    ProductSearchResultComponent,
    ProductDetailsComponent
]

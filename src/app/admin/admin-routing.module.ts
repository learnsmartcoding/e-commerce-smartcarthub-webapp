import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminActionComponent } from './admin-action/admin-action.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'action' },
  { path: 'action', component: AdminActionComponent },
  { path: 'manage/products', component: ManageProductsComponent },
  { path: 'manage/product/create', component: AddProductComponent },
  { path: 'manage/product/edit/:productId', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

export const routedAdminModuleComponents = [
  AdminActionComponent,
  ManageProductsComponent,
  AddProductComponent,
  EditProductComponent
];

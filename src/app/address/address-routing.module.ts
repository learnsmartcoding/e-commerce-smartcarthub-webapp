import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: AddressListComponent },
  { path: 'create', component: CreateAddressComponent },
  { path: 'edit/:id', component: EditAddressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule {}

export const routedAddressModuleComponents = [
  AddressListComponent,
  CreateAddressComponent,
  EditAddressComponent,
];

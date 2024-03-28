import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressRoutingModule, routedAddressModuleComponents } from './address-routing.module';

@NgModule({
  declarations: [
    routedAddressModuleComponents
  ],
  imports: [CommonModule, AddressRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class AddressModule {}

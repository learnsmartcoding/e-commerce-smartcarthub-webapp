import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddressRoutingModule, routedAddressModuleComponents } from './address-routing.module';

@NgModule({
  declarations: [
    routedAddressModuleComponents
  ],
  imports: [CommonModule, AddressRoutingModule, SharedModule, FormsModule],
  providers: [],
})
export class AddressModule {}

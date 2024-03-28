import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import {
  OrderRoutingModule,
  orderRoutedComponents,
} from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [orderRoutedComponents, OrderListComponent],
  imports: [CommonModule, OrderRoutingModule, SharedModule, FormsModule],
  providers: [],
})
export class OrderModule {}

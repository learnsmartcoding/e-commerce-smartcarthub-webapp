import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule, routedComponents } from './product-routing.module';

@NgModule({
  declarations: [routedComponents],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}

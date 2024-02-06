import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule, routedComponents } from './shopping-routing.module';

@NgModule({
  declarations: [routedComponents],
  imports: [CommonModule, ShoppingRoutingModule],
})
export class ShoppingModule {}

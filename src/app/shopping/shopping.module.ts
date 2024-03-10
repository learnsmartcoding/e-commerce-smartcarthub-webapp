import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule, routedComponents } from './shopping-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [routedComponents],
  imports: [CommonModule, ShoppingRoutingModule, FormsModule],
})
export class ShoppingModule {}

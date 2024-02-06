import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category/product-category.component';



@NgModule({
  declarations: [ProductCategoryComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductCategoryComponent]
})
export class SharedModule { }

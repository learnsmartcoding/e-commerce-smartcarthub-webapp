import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule, routedComponents } from './product-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    routedComponents,
    ProductListComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule   ,
    SharedModule 
  ],
  providers:[]
})
export class ProductModule { }

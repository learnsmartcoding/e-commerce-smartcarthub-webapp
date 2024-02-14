import { Component } from '@angular/core';
import { ProductCategory } from 'src/app/models/category.model';
import { categories } from 'src/app/shared/constants/data.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  
  categories: ProductCategory[] = [];

  ngOnInit(): void {
    this.categories = categories;
  }

}

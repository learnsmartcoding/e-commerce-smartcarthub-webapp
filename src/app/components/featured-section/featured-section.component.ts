import { Component } from '@angular/core';
import { ProductCategory } from 'src/app/models/category.model';
import { ProductModel } from 'src/app/models/product.model';
import {
  categories,
  sampleProducts,
} from 'src/app/shared/constants/data.model';

@Component({
  selector: 'app-featured-section',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.css'],
})
export class FeaturedSectionComponent {
  categories: ProductCategory[] = [];
  products: ProductModel[] = [];
  selectedCategoryId: number | null = null;

  ngOnInit(): void {
    this.categories = categories;
    this.products = sampleProducts;
  }

  getCategoryCssClass(id: number) {
    return `categoryId${id}`;
  }

  filterByCategory(categoryId: number) {    
    this.selectedCategoryId = categoryId;
    this.filterProductsByCategory();
  }

  filterProductsByCategory() {
    this.products =
      this.selectedCategoryId === -1
        ? sampleProducts
        : sampleProducts.filter(
            (f) => f.categoryId === this.selectedCategoryId
          );
  }
}

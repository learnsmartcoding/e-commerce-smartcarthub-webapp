import { Component } from '@angular/core';
import { ProductCategory } from 'src/app/models/category.model';
import { categories } from 'src/app/shared/constants/data.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  categories: ProductCategory[]=[];
  selectedCategory: number | undefined; // Assuming CategoryId is a number
  
  ngOnInit(): void {
    this.categories = categories;
  }
  
}

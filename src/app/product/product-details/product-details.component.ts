import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { categories } from 'src/app/shared/constants/data.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product!: ProductModel;
  selectedImageUrl!: string;
  selectedImageType!: string;
  categories = categories;
  initialLoad=true;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Extract the productId from the route parameter
    // const id = this.route.snapshot.paramMap.get('productId') ?? 0;
    // this.productId = +id;
    // this.getProduct();

    this.route.data.subscribe(({ profileInfo }) => {
      // do something with your resolved data ...
      this.product = profileInfo;      
    });

    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productId') ?? 0;
      this.productId = +productId;
      this.getProduct();
    });
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe({
      next: (data: ProductModel) => {
        this.product = data;
        this.selectedImageUrl = this.product.productImages[0].imageUrl;
        this.selectedImageType = this.getImageType(this.selectedImageUrl);
      },
      error: (error) => {
        console.error('Error fetching product details:', error);
        // Handle error, e.g., display an error message or redirect to an error page
      },
    });
  }

  imageClicked(imageUrl: string): void {
    this.selectedImageUrl = imageUrl;
    this.selectedImageType = this.getImageType(this.selectedImageUrl);
  }

  private getImageType(url: string): string {
    const fileExtension = url.split('.').pop()?.toLowerCase() || '';

    if (fileExtension === 'mp3' || fileExtension === 'mp4') {
      return 'video';
    } else {
      return 'image';
    }
  }

  isVideo(): boolean {
    return this.selectedImageType === 'video';
  }

  getCategoryName(categoryId: number) {
    return this.categories.filter((f) => f.categoryId == categoryId)[0]
      .categoryName;
  }
}

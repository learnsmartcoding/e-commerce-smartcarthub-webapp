import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.css']
})
export class ProductSearchResultComponent {
  price: number = 5000;
  totalProducts: number = 0;
  searchQuery: string = '';
  searchQueryData='';

  constructor(private route: ActivatedRoute,private router: Router,
    private toastrService:ToastrService ) {}

  ngOnInit(): void {
    // Retrieve the search query from the route parameters
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'] || '';     
      this.toastrService.info(this.searchQuery,"Your Search Query");
    });
  }

  onSearchSubmit(): void {    
    // Navigate to the product/search route with the searchQuery as a parameter    
    this.searchQueryData = this.searchQuery;
    this.router.navigate(['/product/search'], { queryParams: { query: this.searchQuery} });    
  }

  onPriceChange(): void {
    // Do something with the changed price
    console.log('Price changed:', this.price);
    // Call your function or perform any logic here
  }

  productCountChanged(count: number) {
    this.totalProducts = count;
  }
}

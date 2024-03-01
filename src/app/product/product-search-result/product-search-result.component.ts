import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.css'],
})
export class ProductSearchResultComponent implements OnInit {
  price: number = 5000;
  totalProducts: number = 0;
  searchQuery: string = '';
  //There are two ways to handle this. since this search route is final one we can do this route navigation or just use the ngModel variable to further filter.
  // Task for my viewers. We got the search query but products never filtered
  // so now make one input() variable in product list and pass this search query to that component to further filter products along with price filter
  // if you finish this and raise pull request in GitHub, I can approve to merge the code if all looks good!
  //Happy coding, Happy Learning!
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'] || '';
      this.toastrService.info(this.searchQuery, 'Your Search query');
    });
  }

  onSearchSubmit() {
    this.router.navigate(['/product/search'], {
      queryParams: { query: this.searchQuery },
    });
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

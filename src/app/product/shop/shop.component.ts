import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  message: string = 'Initial Message';
  price: number = 1000;
  totalProducts: number = 0;
  searchQuery: string = '';

  constructor(private router: Router) {
    console.log('1. constructor');
  } 

  onSearchSubmit(): void {    
    // Navigate to the product/search route with the searchQuery as a parameter    
    this.router.navigate(['/product/search'], { queryParams: { query: this.searchQuery } });
  }

  ngOnChanges() {
    console.log('2. ngOnChanges');
  }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy');
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

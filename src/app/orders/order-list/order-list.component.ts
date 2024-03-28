import { Component } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { ProductModel } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  products: ProductModel[] = [];
  orders: OrderModel[]=[];
  expandedOrder: number | null = null;

  constructor(private productService: ProductService,private orderService: OrderService){}

  ngOnInit(): void {
    this.getProducts();
    this.getOrders();
  }

  getProducts() {    
    this.productService.getProducts(10).subscribe((d) => {      
      this.products = d;      
    });
  }

  getOrders(){
    this.orderService.GetOrders().subscribe(data=>this.orders=data);
  }

  getProductById(productId: number): ProductModel | undefined {
    return this.products.find(f=>f.productId==productId);
  }

  toggleOrderDetails(orderId: number): void {
    this.expandedOrder = this.expandedOrder === orderId ? null : orderId;    
  }
}

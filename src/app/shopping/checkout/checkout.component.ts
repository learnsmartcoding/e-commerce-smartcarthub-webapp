import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressModel } from 'src/app/models/address.model';
import { CartModel } from 'src/app/models/cart.model';
import { Claim } from 'src/app/models/claim';
import { OrderItems, OrderItemsModel, OrderModel } from 'src/app/models/order.model';
import { ProductModel } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  claims: Claim[] = [];
  addresses: AddressModel[] = [];
  selectedAddress!: AddressModel;
  selectedAddressId: number = 1;

  products: ProductModel[] = [];
  cartItems: CartModel[] = [];
  cartProducts: ProductModel[] = [];
  totalAmount = 0;

  constructor(
    private loginService: AuthService,
    private addressService: UserProfileService,
    private cartService: CartService,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.loginService.claims$.subscribe((c) => {
      this.claims = c;
    });
    this.getAddress();
    this.cartProducts = [];
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(500).subscribe((data) => {
      this.products = data;
      this.getCartDetails();
    });
  }

  updateQuantity(product: ProductModel): void {
    const cartModel: CartModel = {
      cartId: product.cartId || 0,
      userId: 0,
      productId: product.productId,
      quantity: product.quantity,
    };

    this.cartService.updateCart(cartModel).subscribe(() => {
      this.getCartDetails();
    });
  }

  getCartDetails() {
    this.totalAmount = 0;
    this.cartService.getCart().subscribe((data) => {
      this.cartProducts = [];
      this.cartItems = data;

      this.cartItems.forEach((cartItem) => {
        const product = this.products.find(
          (product) => +product.productId === +cartItem.productId
        );

        if (product) {
          const productToAdd: ProductModel = {
            productId: product.productId,
            productName: product.productName,
            productDescription: product.productDescription,
            price: product.price,
            quantity: cartItem.quantity,
            categoryId: product.categoryId,
            productImages: product.productImages,
            cartId: cartItem.cartId,
          };
          this.cartProducts.push(productToAdd);

          this.totalAmount += productToAdd.price * cartItem.quantity;
        }
      });
    });
  }

  getAddress() {
    this.addressService.getAddress().subscribe((s: AddressModel[]) => {
      this.addresses = s;
      this.selectedAddress = s[0];
    });
  }

  onAddressSelection(id: any) {
    this.selectedAddress = this.addresses.filter((f) => f.addressId == id)[0];
  }

  getAddressById(address: AddressModel): string {
    if (address) {
      return `${address.street}, ${address.city}, ${address.state}, ${address.zipCode}`;
    }
    return '';
  }

  getClaimValue(key: string) {
    if (key === 'emails')
      return this.claims.filter((f) => f.claim === key)[0].value[0];

    return this.claims.filter((f) => f.claim === key)[0].value;
  }

  placeOrder(): void {
    // Create an OrderModel instance
    const order: OrderModel = {
      orderId: 0,
      userId: 0,
      orderDate: new Date(),
      totalAmount: this.calculateTotalAmount(),
      orderItems: this.createOrderItems(),
    };

    // Call the order service to place the order
    this.orderService.placeOrder(order).subscribe({
      next: (response) => {
        console.log('Order placed successfully:', response);
        this.toastrService.success('Order placed successfully','Order Status');
        this.cartProducts.forEach((f) => {
          this.removeItemFromCart(f.cartId || 0);
        });
        this.router.navigateByUrl("/user/orders");
        // Reset the cart or perform any other action needed after placing the order
      },
      error: (error) => {
        console.error('Error placing order:', error);
        // Handle error appropriately
      },
    });
  }

  calculateTotalAmount(): number {
    let total = 0;
    for (const product of this.cartProducts) {
      total += product.price * product.quantity;
    }
    return total;
  }

  createOrderItems(): OrderItems[] {
    const orderItems: OrderItems[] = [];
    for (const product of this.cartProducts) {
      const orderItem: OrderItems = {
        orderItemId: 0, // Assuming this will be generated by the server
        orderId: 0,
        productId: product.productId,
        quantity: product.quantity,
        price: product.price,
        totalCost: product.price * product.quantity,
      };
      orderItems.push(orderItem);
    }
    return orderItems;
  }

  removeItemFromCart(id: number) {
    this.cartService.removeFromCart(id).subscribe((d) => this.getCartDetails());
  }
}

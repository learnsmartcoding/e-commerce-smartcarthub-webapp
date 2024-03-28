import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderModel } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBaseUrl.orders;
  }

  GetOrders(): Observable<OrderModel[]> {
    const url = `${this.apiUrl}/orders`;
    return this.getArrary<OrderModel>(url);
  }

  placeOrder(order: OrderModel): Observable<any> {
    const url = `${this.apiUrl}/orders`;
    return this.http.post<any>(url, order);
  }

  private get<T>(url: string, options?: any): Observable<T> {
    return this.http
      .get(url, options)
      .pipe(map((res) => this.extractData<T>(res))) as Observable<T>;
  }
  private getArrary<T>(url: string, options?: any): Observable<T[]> {
    return this.http
      .get(url, options)
      .pipe(map((res) => this.extractData<T[]>(res))) as Observable<T[]>;
  }

  private extractData<T>(res: any) {
    if (res && (res.status < 200 || res.status >= 300)) {
      throw new Error('Bad response status: ' + res.status);
    }
    return (res || {}) as T;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBaseUrl;
  }

  getProduct(id: number): Observable<ProductModel> {
    const url = `${this.apiUrl}/${environment.apiEndpoints.product.getProduct}/${id}`;
    return this.get<ProductModel>(url);
  }

  getProducts(fetchCount: number): Observable<ProductModel[]> {
    const url = `${this.apiUrl}/${environment.apiEndpoints.product.getAllProduct}?pageNumber=1&pageSize=${fetchCount}&sortBy=ProductName`;
    return this.getArrary<ProductModel>(url);
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddressModel } from '../models/address.model';

export interface UserProfileModel {
  UserId: number;
  DisplayName: string;
  FirstName: string;
  LastName: string;
  Email: string;
  AdObjId: string;
}

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBaseUrl.userProfile;
  }

  getUserProfile(): Observable<UserProfileModel> {
    const url = `${this.apiUrl}/user-profiles`;
    return this.get<UserProfileModel>(url);
  }

  getAddressById(id: number): Observable<AddressModel> {
    const url = `${this.apiUrl}/address/${id}`;
    return this.get<AddressModel>(url);
  }

  getAddress(): Observable<AddressModel[]> {
    const url = `${this.apiUrl}/address`;
    return this.getArrary<AddressModel>(url);
  }
  saveAddress(model: AddressModel) {
    const url = `${this.apiUrl}/address`;
    return this.http.post(url, model);
  }
  updateAddress(id: number, model: AddressModel) {
    const url = `${this.apiUrl}/address`;
    return this.http.put(url, model);
  }

  deleteAddress(id: number) {
    const url = `${this.apiUrl}/address/${id}`;
    return this.http.delete(url);
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

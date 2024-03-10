import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  GetUserProfile(): Observable<UserProfileModel> {
    const url = `${this.apiUrl}/user-profiles`;
    return this.get<UserProfileModel>(url);
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

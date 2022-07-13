import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {
  }

  getUrl(suffix: string, env: any): string {
    return `${env.apiUrl}/${suffix}`;
  }

  get(url: string, params: { [name: string]: string; } = null): Observable<any> {
    let p = new HttpParams();
    if (params) {
      for (const key of Object.keys(params)) {
        p = p.set(key, params[key]);
      }
    }
    return this.http.get<any>(url, { params: p });
  }

  post(url: string, data: any = {}): Observable<any> {
    return this.http.post<any>(url, data);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete<any>(url);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  }

  save(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

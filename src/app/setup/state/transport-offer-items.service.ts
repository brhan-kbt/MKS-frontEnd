import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { TransportOfferItem } from './transport-offer-item.model';
import { TransportOfferItemsStore } from './transport-offer-items.store';

@Injectable({ providedIn: 'root' })
export class TransportOfferItemsService {

  constructor(private transportOfferItemsStore: TransportOfferItemsStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<TransportOfferItem[]>('https://api.com').pipe(tap(entities => {
      this.transportOfferItemsStore.set(entities);
    }));
  }

  add(transportOfferItem: TransportOfferItem) {
    this.transportOfferItemsStore.add(transportOfferItem);
  }

  update(id, transportOfferItem: Partial<TransportOfferItem>) {
    this.transportOfferItemsStore.update(id, transportOfferItem);
  }

  remove(id: ID) {
    this.transportOfferItemsStore.remove(id);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { TransportOffer } from './transport-offer.model';
import { TransportOffersStore } from './transport-offers.store';

@Injectable({ providedIn: 'root' })
export class TransportOffersService {

  constructor(private transportOffersStore: TransportOffersStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<TransportOffer[]>('https://api.com').pipe(tap(entities => {
      this.transportOffersStore.set(entities);
    }));
  }

  add(transportOffer: TransportOffer) {
    this.transportOffersStore.add(transportOffer);
  }

  update(id, transportOffer: Partial<TransportOffer>) {
    this.transportOffersStore.update(id, transportOffer);
  }

  remove(id: ID) {
    this.transportOffersStore.remove(id);
  }

}

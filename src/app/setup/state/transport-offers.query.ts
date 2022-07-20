import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TransportOffersStore, TransportOffersState } from './transport-offers.store';

@Injectable({ providedIn: 'root' })
export class TransportOffersQuery extends QueryEntity<TransportOffersState> {

  constructor(protected override store: TransportOffersStore) {
    super(store);
  }

}

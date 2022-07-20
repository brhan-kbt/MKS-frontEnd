import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TransportOfferItemsStore, TransportOfferItemsState } from './transport-offer-items.store';

@Injectable({ providedIn: 'root' })
export class TransportOfferItemsQuery extends QueryEntity<TransportOfferItemsState> {

  constructor(protected store: TransportOfferItemsStore) {
    super(store);
  }

}

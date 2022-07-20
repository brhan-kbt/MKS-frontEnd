import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { OfferItemsStore, OfferItemsState } from './offer-items.store';

@Injectable({ providedIn: 'root' })
export class OfferItemsQuery extends QueryEntity<OfferItemsState> {

  constructor(protected override store: OfferItemsStore) {
    super(store);
  }

}

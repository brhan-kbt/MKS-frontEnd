import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TransportOfferItem } from './transport-offer-item.model';

export interface TransportOfferItemsState extends EntityState<TransportOfferItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'transport-offer-items' })
export class TransportOfferItemsStore extends EntityStore<TransportOfferItemsState> {

  constructor() {
    super();
  }

}

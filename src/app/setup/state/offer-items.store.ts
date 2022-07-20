import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { OfferItem } from '../models/offer-item.model';

export interface OfferItemsState extends EntityState<OfferItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'offer-items' })
export class OfferItemsStore extends EntityStore<OfferItemsState> {

  constructor() {
    super();
  }

}

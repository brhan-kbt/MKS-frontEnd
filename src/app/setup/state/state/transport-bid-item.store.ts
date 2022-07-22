import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TransportBidItem } from '../../models/transport_bid_item.model';

export interface TransportBidItemState extends EntityState<TransportBidItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'transport_bid_item' })
export class TransportBidItemStore extends EntityStore<TransportBidItemState> {

  constructor() {
    super();
  }

}

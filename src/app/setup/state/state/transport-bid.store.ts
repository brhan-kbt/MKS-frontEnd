import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TransportBid } from '../../models/transport_bid.model';

export interface TransportBidState extends EntityState<TransportBid> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'transport_bid' })
export class TransportBidStore extends EntityStore<TransportBidState> {

  constructor() {
    super();
  }

}
